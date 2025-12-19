import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { sendTelegramMessage } from "./src/lib/telegram";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const { nextUrl, cookies } = req;
  
  // Only track visits to the home page to avoid spam and redundant checks
  if (nextUrl.pathname === "/") {
    const visitedCookie = cookies.get("visited");

    if (!visitedCookie) {
      // Extract visitor data
      const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown IP";
      const city = req.headers.get("x-vercel-ip-city") || "Unknown City";
      const region = req.headers.get("x-vercel-ip-country-region") || "Unknown Region";
      const country = req.headers.get("x-vercel-ip-country") || "Unknown Country";
      const userAgent = req.headers.get("user-agent") || "Unknown Device";
      
      // Simple parsing for OS and Browser (basic detection)
      let os = "Unknown OS";
      if (userAgent.includes("Windows")) os = "Windows";
      else if (userAgent.includes("Mac")) os = "MacOS";
      else if (userAgent.includes("Linux")) os = "Linux";
      else if (userAgent.includes("Android")) os = "Android";
      else if (userAgent.includes("iOS") || userAgent.includes("iPhone")) os = "iOS";

      let browser = "Unknown Browser";
      if (userAgent.includes("Chrome")) browser = "Chrome";
      else if (userAgent.includes("Firefox")) browser = "Firefox";
      else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) browser = "Safari";
      else if (userAgent.includes("Edge")) browser = "Edge";

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
