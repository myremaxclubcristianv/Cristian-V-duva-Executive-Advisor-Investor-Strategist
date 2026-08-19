-- ==============================================================================
-- SUPABASE SCHEMA MIGRATION: EXECUTIVE CRISTIAN VĂDUVA
-- Tables: consultation_requests, site_visits
-- Security: Row Level Security (RLS) enabled, anonymous direct access denied.
-- Safe & Idempotent: 100% Additive. No DROP TABLE, no TRUNCATE, no DELETE.
-- ==============================================================================

-- 1. Consultation Requests Table (Leads)
CREATE TABLE IF NOT EXISTS public.consultation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  interest TEXT NOT NULL,
  message TEXT NOT NULL,
  source TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed'))
);

-- Indexes for consultation_requests
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON public.consultation_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status ON public.consultation_requests (status);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_email ON public.consultation_requests (email);

-- 2. Site Visits Table (Visitor Intelligence)
CREATE TABLE IF NOT EXISTS public.site_visits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  session_id TEXT NOT NULL,
  path TEXT,
  referrer TEXT,
  user_agent TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  country TEXT,
  city TEXT,
  is_new_session BOOLEAN NOT NULL DEFAULT true
);

-- Indexes for site_visits
CREATE INDEX IF NOT EXISTS idx_site_visits_created_at ON public.site_visits (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_site_visits_session_id ON public.site_visits (session_id);
CREATE INDEX IF NOT EXISTS idx_site_visits_path ON public.site_visits (path);

-- 3. Row Level Security (RLS) Configuration
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_visits ENABLE ROW LEVEL SECURITY;

-- 4. Additive Policies (Denies anonymous public access; server uses service_role key to bypass RLS)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'consultation_requests' 
    AND policyname = 'Deny anonymous access to consultation_requests'
  ) THEN
    CREATE POLICY "Deny anonymous access to consultation_requests"
      ON public.consultation_requests
      FOR ALL
      TO anon
      USING (false);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'site_visits' 
    AND policyname = 'Deny anonymous access to site_visits'
  ) THEN
    CREATE POLICY "Deny anonymous access to site_visits"
      ON public.site_visits
      FOR ALL
      TO anon
      USING (false);
  END IF;
END $$;
