import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";
import { after } from "next/server";
import { sendTelegramMessage, escapeHtml } from "./src/lib/telegram";

interface IpApiResponse {
  ip?: string;
  city?: string;
  region?: string;
  country_name?: string;
  org?: string;
  asn?: string;
  network?: string;
  error?: boolean;
  reason?: string;
}

async function getVisitorDetails(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "Unknown IP";
  
  console.error(`[TRACKING] Processing visitor: ${ip}`);

  try {
    const { device, browser, os } = userAgent(req);
    
    // Fetch detailed geo and ISP info with timeout
    let geoData: IpApiResponse = {};
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      
      const geoRes = await fetch(
        `https://ipapi.co/${ip === "::1" || ip === "127.0.0.1" || ip === "Unknown IP" ? "" : ip}/json/`,
        { signal: controller.signal }
      );
      
      clearTimeout(timeoutId);
      
      if (geoRes.ok) {
        geoData = await geoRes.json();
        console.error(`[TRACKING] Geo data fetched successfully for ${ip}`);
      } else {
        console.error(`[TRACKING] Geo API returned error ${geoRes.status}`);
      }
    } catch (e) {
      console.error("[TRACKING] Geo fetch failed or timed out:", e);
    }

    const city = escapeHtml(geoData.city || req.headers.get("x-vercel-ip-city") || "Unknown City");
    const region = escapeHtml(geoData.region || req.headers.get("x-vercel-ip-country-region") || "Unknown Region");
    const country = escapeHtml(geoData.country_name || req.headers.get("x-vercel-ip-country") || "Unknown Country");
    const isp = escapeHtml(geoData.org || "Unknown ISP");
    
    const deviceModel = escapeHtml(device.model || "Unknown Device");
    const deviceType = escapeHtml(device.type || "Desktop");
    const browserName = escapeHtml(browser.name || "Unknown Browser");
    const browserVersion = escapeHtml(browser.version || "");
    const osName = escapeHtml(os.name || "Unknown OS");
    const osVersion = escapeHtml(os.version || "");

    const time = new Date().toISOString().replace("T", " ").split(".")[0] + " UTC";

    const message = `
🌐 <b>NEW VISITOR</b>

📱 <b>Device:</b> ${deviceModel} (${deviceType})
🌐 <b>Browser:</b> ${browserName} ${browserVersion}
💻 <b>OS:</b> ${osName} ${osVersion}

📍 <b>Location:</b> ${city}, ${region}, ${country}
🌍 <b>IP:</b> ${ip}
🏢 <b>ISP:</b> ${isp}

📶 <b>Network:</b> ${escapeHtml(geoData.network || "Unknown type")}
🕐 <b>Time:</b> ${time}
    `;

    console.error(`[TRACKING] Attempting to send Telegram notification for ${ip}`);
    await sendTelegramMessage(message);
  } catch (error) {
    console.error("[TRACKING] Critical error in background task:", error);
  }
}

export function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req;
  
  // Skip tracking for static files and specific paths
  const isStaticAsset = nextUrl.pathname.includes('.') || nextUrl.pathname.startsWith('/_next') || nextUrl.pathname.startsWith('/api');
  if (isStaticAsset) {
    return NextResponse.next();
  }

  const visitedCookie = cookies.get("visited");
  const isDebug = nextUrl.searchParams.has("debug");

  if (!visitedCookie || isDebug) {
    console.error(`[TRACKING] New visitor detected on ${nextUrl.pathname}. Debug: ${isDebug}`);
    
    // Connectivity test for first time or debug
    if (isDebug) {
      after(async () => {
        console.error("[TRACKING] Sending debug connectivity test...");
        await sendTelegramMessage("🔔 <b>Visitor Tracking System Diagnostic</b>\nStatus: Online\nTime: " + new Date().toISOString());
      });
    }

    after(async () => {
      await getVisitorDetails(req);
    });
  }

  const response = NextResponse.next();
  
  if (!visitedCookie) {
    response.cookies.set("visited", "true", {
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
