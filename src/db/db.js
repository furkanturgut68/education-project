import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://qmcironqvfairxsftrch.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtY2lyb25xdmZhaXJ4c2Z0cmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3MTkyMTMsImV4cCI6MjAxNjI5NTIxM30.IKtCznj2WmEAZSukykMh1BknzXyYq0pcABmIP_Nxezc");

export default supabase;