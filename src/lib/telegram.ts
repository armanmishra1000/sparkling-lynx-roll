export const sendTelegramMessage = async (message: string): Promise<void> => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials missing! Token:", token ? "Set" : "Missing", "ChatID:", chatId ? "Set" : "Missing");
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
