export const escapeHtml = (text: string): string => {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const sendTelegramMessage = async (message: string): Promise<void> => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials missing! Token:", token ? "Set" : "Missing", "ChatID:", chatId ? "Set" : "Missing");
    return;
  }

  // Ensure message is not empty
  if (!message || message.trim().length === 0) {
    console.warn("Attempted to send empty Telegram message");
    return;
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    console.log("Sending Telegram message...");
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to send Telegram message:", response.status, errorText);
    } else {
      console.log("Telegram message sent successfully!");
    }
  } catch (error) {
    console.error("Error sending Telegram message:", error);
  }
};
