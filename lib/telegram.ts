/**
 * Server-only Telegram Bot API Client
 * Sends isolated server-side alerts to specified Telegram Chat.
 */

if (typeof window !== "undefined") {
  throw new Error("CRITICAL SECURITY ERROR: lib/telegram.ts cannot be imported in client components.");
}

export interface TelegramDispatchResult {
  success: boolean;
  error?: string;
}

export async function sendTelegramMessage(text: string): Promise<TelegramDispatchResult> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || process.env.LEAD_ALERT_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID || process.env.LEAD_ALERT_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("[TELEGRAM_DISPATCH] Missing TELEGRAM_BOT_TOKEN/LEAD_ALERT_TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID/LEAD_ALERT_TELEGRAM_CHAT_ID.");
    return { success: false, error: "Telegram credentials missing in environment variables." };
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      console.log("[TELEGRAM_DISPATCH] Message sent successfully.");
      return { success: true };
    } else {
      const errorText = await res.text().catch(() => "No response body");
      console.error(`[TELEGRAM_DISPATCH_FAILED] HTTP ${res.status}: ${errorText.slice(0, 150)}`);
      return { success: false, error: `Telegram returned HTTP ${res.status}` };
    }
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    const message = err instanceof Error ? err.message : String(err);
    console.error("[TELEGRAM_DISPATCH_ERROR]", message);
    return { success: false, error: message };
  }
}
