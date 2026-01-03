"use client";

type EventName = 
  | "cta_click_primary" 
  | "cta_click_secondary" 
  | "signup_submit" 
  | "pricing_tier_select"
  | "faq_expand"
  | "video_modal_open";

type EventProperties = Record<string, string | number | boolean>;

export const trackEvent = (name: EventName, properties?: EventProperties) => {
  // In a real app, this would send data to PostHog, Google Analytics, or Segment
  // For now, we log to console to verify the events are firing as per PRD requirements
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${name}`, properties);
  }
  
  // Example integration structure:
  // if (window.gtag) window.gtag('event', name, properties);
  // if (window.posthog) window.posthog.capture(name, properties);
};