import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Format the object into a readable string
    let messageBody = "";
    for (const [key, value] of Object.entries(data)) {
      // Capitalize first letter of key for better readability
      const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
      messageBody += `<b>${formattedKey}:</b> ${value}\n`;
    }

    const message = `
📝 <b>NEW FORM SUBMISSION</b>

${messageBody}
🕐 <b>Time:</b> ${new Date().toUTCString()}
    `;

    // Explicitly await the promise for serverless function compatibility
    await sendTelegramMessage(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing form notification:", error);
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 });
  }
}
