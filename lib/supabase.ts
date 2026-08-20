import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase Service Role & Public Client Helpers
 * IMPORTANT: This module MUST ONLY be executed on the server.
 * Uses SUPABASE_SERVICE_ROLE_KEY for privileged database operations bypassing RLS.
 * Uses NEXT_PUBLIC_SUPABASE_ANON_KEY for standard public client initialization.
 * NEVER expose SUPABASE_SERVICE_ROLE_KEY to client components.
 */

if (typeof window !== "undefined") {
  throw new Error("CRITICAL SECURITY ERROR: lib/supabase.ts cannot be imported in client components.");
}

export const SUPABASE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
};

/**
 * Returns a privileged Supabase client powered by SUPABASE_SERVICE_ROLE_KEY.
 * Used for server-side database persistence (consultation_requests, site_visits).
 */
export function getSupabaseAdminClient(): { client: SupabaseClient | null; error?: string } {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) {
    console.error("[SUPABASE_ERROR] Missing NEXT_PUBLIC_SUPABASE_URL environment variable.");
    return { client: null, error: "Server database URL is not configured." };
  }

  if (!serviceRoleKey) {
    console.error("[SUPABASE_ERROR] Missing SUPABASE_SERVICE_ROLE_KEY environment variable. Privileged writes strictly require service_role key.");
    return { client: null, error: "Server database authorization key is not configured." };
  }

  try {
    const client = createClient(url, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    return { client };
  } catch (err) {
    console.error("[SUPABASE_ERROR] Failed to initialize Supabase admin client:", err);
    return { client: null, error: "Failed to initialize server database client." };
  }
}

/**
 * Returns a standard Supabase client powered by NEXT_PUBLIC_SUPABASE_ANON_KEY.
 */
export function getSupabaseAnonClient(): { client: SupabaseClient | null; error?: string } {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return { client: null, error: "Supabase public environment variables not configured." };
  }

  try {
    const client = createClient(url, anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
    return { client };
  } catch {
    return { client: null, error: "Failed to initialize public Supabase client." };
  }
}

