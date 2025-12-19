export const escapeHtml = (text: string): string => {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const sendTelegramMessage = async (message: string, parseMode: "HTML" | "Markdown" | "None" = "HTML"): Promise<void> => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("[TELEGRAM] Credentials missing!");
    return;
  }

  if (!message || message.trim().length === 0) {
    return;
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body: Record<string, string> = {
      chat_id: chatId,
      text: message,
    };

    if (parseMode !== "None") {
      body.parse_mode = parseMode;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[TELEGRAM] Error ${response.status}: ${errorText}`);
      
      // Fallback: If HTML parsing failed (400), try sending as plain text
      if (response.status === 400 && parseMode === "HTML") {
        console.error("[TELEGRAM] HTML parsing failed, retrying with plain text...");
        const plainMessage = message.replace(/<[^>]*>/g, ""); // Strip tags
        await sendTelegramMessage(`[HTML_FAIL_FALLBACK]\n${plainMessage}`, "None");
      }
    }
  } catch (error) {
    console.error("[TELEGRAM] Network error:", error);
  }
};
