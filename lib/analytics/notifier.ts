import { VisitorSession, VisitorEvent } from "./types";

export function formatExecutiveAlert(session: VisitorSession, event: VisitorEvent): string {
  const time = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Bucharest",
  });

  const location = session.city !== "Unknown" && session.country !== "Unknown"
    ? `${session.city}, ${session.country}`
    : session.country !== "Unknown"
    ? session.country
    : "Unknown Location";

  const utm = [session.utmSource, session.utmMedium, session.utmCampaign]
    .filter(Boolean)
    .join(" / ");

  return [
    "━━━━━━━━━━━━━━━━━━",
    "AI X MEDIA",
    "NEW HIGH-INTENT VISITOR",
    "━━━━━━━━━━━━━━━━━━",
    "",
    `Location: ${location}`,
    `Device: ${session.deviceType.toUpperCase()}`,
    `Source: ${session.trafficSource}`,
    `Landing: ${session.landingPage}`,
    `Journey: ${session.pageCount} pages (${session.pagesVisited.join(" → ")})`,
    `Latest Action: ${event.eventType.replace(/_/g, " ")} on ${event.pagePath}`,
    `Intent: ${session.intentLevel.replace(/_/g, " ")}`,
    `Time: ${time} (RO)`,
    utm ? `UTM: ${utm}` : "",
    "━━━━━━━━━━━━━━━━━━",
  ]
    .filter(Boolean)
    .join("\n");
}

export async function dispatchLeadNotification(
  session: VisitorSession,
  event: VisitorEvent
): Promise<{ success: boolean; channel?: string; error?: string }> {
  const message = formatExecutiveAlert(session, event);

  // 1. Telegram Notification (if configured)
  const botToken = process.env.LEAD_ALERT_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.LEAD_ALERT_TELEGRAM_CHAT_ID;

  if (botToken && chatId) {
    try {
      const tgUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const res = await fetch(tgUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          disable_web_page_preview: true,
        }),
      });

      if (res.ok) {
        console.log(`[VISITOR_INTELLIGENCE] NOTIFICATION_SENT via Telegram for session ${session.id.slice(0, 8)}`);
        return { success: true, channel: "telegram" };
      } else {
        console.error(`[VISITOR_INTELLIGENCE] NOTIFICATION_FAILED Telegram HTTP ${res.status}`);
      }
    } catch (err) {
      console.error("[VISITOR_INTELLIGENCE] NOTIFICATION_FAILED Telegram network error", err);
    }
  }

  // 2. Email Notification Webhook (if configured)
  const emailWebhook = process.env.LEAD_ALERT_WEBHOOK_URL;
  if (emailWebhook) {
    try {
      const res = await fetch(emailWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "LEAD_ALERT",
          subject: `AiX Media High-Intent Lead: ${event.eventType}`,
          body: message,
          session,
          event,
        }),
      });
      if (res.ok) {
        console.log(`[VISITOR_INTELLIGENCE] NOTIFICATION_SENT via Webhook for session ${session.id.slice(0, 8)}`);
        return { success: true, channel: "webhook" };
      }
    } catch (err) {
      console.error("[VISITOR_INTELLIGENCE] NOTIFICATION_FAILED Webhook error", err);
    }
  }

  // If no external notification provider credentials configured, log cleanly
  console.log(`[VISITOR_INTELLIGENCE] HIGH_INTENT_LEAD_RECORDED (No active notification secrets):\n${message}`);
  return { success: true, channel: "local_log" };
}
