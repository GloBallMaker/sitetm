/*
# Create contact_inquiries table for the T&M Partners contact form

1. New Tables
- `contact_inquiries` — stores submissions from the website contact form
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's name
  - `company` (text, nullable) — optional company name
  - `email_or_phone` (text, not null) — contact email or phone
  - `area_of_interest` (text, nullable) — selected practice area
  - `description` (text, not null) — brief description of the legal matter
  - `consent_given` (boolean, not null, default false) — user consent to data processing
  - `lang` (text, not null, default 'uk') — submission language
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_inquiries`.
- Allow anon + authenticated INSERT only (public can submit forms).
- No SELECT/UPDATE/DELETE for anon — only the firm's authenticated admin can read inquiries.
- This is a single-tenant no-auth public contact form: anon needs INSERT access.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email_or_phone text NOT NULL,
  area_of_interest text,
  description text NOT NULL,
  consent_given boolean NOT NULL DEFAULT false,
  lang text NOT NULL DEFAULT 'uk',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries"
ON contact_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_select_inquiries" ON contact_inquiries;
CREATE POLICY "authenticated_select_inquiries"
ON contact_inquiries FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "authenticated_update_inquiries" ON contact_inquiries;
CREATE POLICY "authenticated_update_inquiries"
ON contact_inquiries FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_inquiries" ON contact_inquiries;
CREATE POLICY "authenticated_delete_inquiries"
ON contact_inquiries FOR DELETE
TO authenticated
USING (true);
