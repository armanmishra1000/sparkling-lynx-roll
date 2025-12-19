import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { sendTelegramMessage, escapeHtml } from "./src/lib/telegram";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const { nextUrl, cookies } = req;
  
  // Only track visits to the home page to avoid spam and redundant checks
  if (nextUrl.pathname === "/") {
    const visitedCookie = cookies.get("visited");

    if (!visitedCookie) {
      try {
        // Extract visitor data
        const ip = escapeHtml(req.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown IP");
        const city = escapeHtml(req.headers.get("x-vercel-ip-city") || "Unknown City");
        const region = escapeHtml(req.headers.get("x-vercel-ip-country-region") || "Unknown Region");
        const country = escapeHtml(req.headers.get("x-vercel-ip-country") || "Unknown Country");
        const rawUserAgent = req.headers.get("user-agent") || "Unknown Device";
        const userAgent = escapeHtml(rawUserAgent);
        
        // Simple parsing for OS and Browser (basic detection)
        let rawOs = "Unknown OS";
        if (rawUserAgent.includes("Windows")) rawOs = "Windows";
        else if (rawUserAgent.includes("Mac")) rawOs = "MacOS";
        else if (rawUserAgent.includes("Linux")) rawOs = "Linux";
        else if (rawUserAgent.includes("Android")) rawOs = "Android";
        else if (rawUserAgent.includes("iOS") || rawUserAgent.includes("iPhone")) rawOs = "iOS";

        let rawBrowser = "Unknown Browser";
        if (rawUserAgent.includes("Chrome")) rawBrowser = "Chrome";
        else if (rawUserAgent.includes("Firefox")) rawBrowser = "Firefox";
        else if (rawUserAgent.includes("Safari") && !rawUserAgent.includes("Chrome")) rawBrowser = "Safari";
        else if (rawUserAgent.includes("Edge")) rawBrowser = "Edge";

        const os = escapeHtml(rawOs);
        const browser = escapeHtml(rawBrowser);
        const time = new Date().toUTCString();

        const message = `
🌐 <b>NEW VISITOR</b>

📱 <b>Device:</b> Unknown (${userAgent.split(')')[0].split('(')[1] || 'Unknown'})
🌐 <b>Browser:</b> ${browser}
💻 <b>OS:</b> ${os}

📍 <b>Location:</b> ${city}, ${region}, ${country}
🌍 <b>IP:</b> ${ip}
🏢 <b>ISP:</b> Unknown (Requires external API)

📶 <b>Network:</b> Unknown type
🕐 <b>Time:</b> ${time}
        `;

        // Use waitUntil to ensure the background task completes
        // This is crucial for Edge Runtime where execution stops immediately after return
        event.waitUntil(sendTelegramMessage(message));
      } catch (error) {
        console.error("Error in visitor tracking middleware:", error);
      }

      // Create response and set cookie
      const response = NextResponse.next();
      response.cookies.set("visited", "true", {
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
