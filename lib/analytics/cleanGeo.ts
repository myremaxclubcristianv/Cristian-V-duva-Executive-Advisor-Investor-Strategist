export interface CoarseLocation {
  country: string;
  city: string;
}

export function extractCoarseLocation(headers: Headers): CoarseLocation {
  // 1. Cloudflare geolocation headers
  const cfCountry = headers.get("cf-ipcountry");
  const cfCity = headers.get("cf-ipcity");

  // 2. Vercel Edge geolocation headers
  const vercelCountry = headers.get("x-vercel-ip-country");
  const vercelCity = headers.get("x-vercel-ip-city");

  const country = cfCountry || vercelCountry || "Unknown";
  const city = cfCity ? decodeURIComponent(cfCity) : vercelCity ? decodeURIComponent(vercelCity) : "Unknown";

  return { country, city };
}
