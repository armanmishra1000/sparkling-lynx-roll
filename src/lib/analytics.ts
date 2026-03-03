import { sendGAEvent } from '@next/third-parties/google';

type EventName =
  | "cta_click_primary"
  | "cta_click_secondary"
  | "signup_submit"
  | "pricing_tier_select"
  | "faq_expand"
  | "video_modal_open";

type EventProperties = Record<string, string | number | boolean>;

type GtagFunction = (
  command: "event" | "config" | "set",
  targetId: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

export const trackEvent = (name: EventName, properties?: EventProperties) => {
  // Log to console in development environment for verification
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${name}`, properties);
  }

  // Send data to Google Analytics using the official helper
  sendGAEvent("event", name, properties || {});
};