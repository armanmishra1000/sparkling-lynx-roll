import { NextResponse } from "next/server";
import { sendTelegramMessage, escapeHtml } from "@/lib/telegram";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeAdminApiUrl(value: string | undefined): string | null {
  const raw = value?.trim();
  if (!raw) return null;

  if (raw.startsWith("https://") || raw.startsWith("http://")) return raw;
  return `https://${raw}`;
}

function normalizeToken(value: string | undefined): string | null {
  const token = value?.trim();
  return token ? token : null;
}

async function forwardToAdmin(payload: Record<string, unknown>): Promise<void> {
  const adminApiUrl = normalizeAdminApiUrl(process.env.ADMIN_API_URL);
  // Back-compat: allow using API_SECRET_KEY on the landing project too.
  const adminApiKey = normalizeToken(
    process.env.ADMIN_API_KEY ?? process.env.API_SECRET_KEY
  );

  if (!adminApiUrl || !adminApiKey) {
    console.error(
      "[ADMIN_API] Missing ADMIN_API_URL or ADMIN_API_KEY (or API_SECRET_KEY)"
    );
    return;
  }

  try {
    const url = new URL("/api/submissions", adminApiUrl);
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminApiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[ADMIN_API] Error ${response.status}: ${errorText}`);
    }
  } catch (error) {
    console.error("[ADMIN_API] Failed to send submission:", error);
  }
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!isRecord(body)) {
      return NextResponse.json(
        { success: false, error: "Invalid payload" },
        { status: 400 }
      );
    }

    const data = body;
    
    // Format the object into a readable string
    let messageBody = "";
    for (const [key, value] of Object.entries(data)) {
      // Capitalize first letter of key for better readability
      const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
      // Sanitize the value to prevent HTML injection/breaking format
      const safeValue = escapeHtml(String(value));
      messageBody += `<b>${formattedKey}:</b> ${safeValue}\n`;
    }

    const message = `
📝 <b>NEW FORM SUBMISSION</b>

${messageBody}
🕐 <b>Time:</b> ${new Date().toUTCString()}
    `;

    // Explicitly await the promise for serverless function compatibility
    await sendTelegramMessage(message);

    await forwardToAdmin(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing form notification:", error);
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 });
  }
}
