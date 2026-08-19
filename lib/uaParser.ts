/**
 * Lightweight, zero-dependency User Agent & Environment Parser
 */

export interface ParsedUserAgent {
  device: "iPhone" | "iPad" | "Android" | "Mac" | "Windows" | "Other";
  browser: "Safari" | "Chrome" | "Firefox" | "Edge" | "Other";
  os: "iOS" | "macOS" | "Android" | "Windows" | "Linux" | "Other";
}

export function parseUserAgent(uaString: string | null | undefined): ParsedUserAgent {
  if (!uaString) {
    return { device: "Other", browser: "Other", os: "Other" };
  }

  const ua = uaString.toLowerCase();

  // Device & OS Detection
  let device: ParsedUserAgent["device"] = "Other";
  let os: ParsedUserAgent["os"] = "Other";

  if (ua.includes("iphone")) {
    device = "iPhone";
    os = "iOS";
  } else if (ua.includes("ipad")) {
    device = "iPad";
    os = "iOS";
  } else if (ua.includes("android")) {
    device = "Android";
    os = "Android";
  } else if (ua.includes("macintosh") || ua.includes("mac os x")) {
    device = "Mac";
    os = "macOS";
  } else if (ua.includes("windows")) {
    device = "Windows";
    os = "Windows";
  } else if (ua.includes("linux")) {
    device = "Other";
    os = "Linux";
  }

  // Browser Detection (Order matters!)
  let browser: ParsedUserAgent["browser"] = "Other";

  if (ua.includes("edg/") || ua.includes("edge/")) {
    browser = "Edge";
  } else if (ua.includes("chrome") || ua.includes("crios")) {
    browser = "Chrome";
  } else if (ua.includes("firefox") || ua.includes("fxios")) {
    browser = "Firefox";
  } else if (ua.includes("safari") && !ua.includes("chrome") && !ua.includes("crios")) {
    browser = "Safari";
  }

  return { device, browser, os };
}
