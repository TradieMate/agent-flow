import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Fallback to hardcoded values if environment variables are not available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bumhbreomwguwlnuqlen.supabase.co'
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1bWhicmVvbXdndXdsbnVxbGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MjIzOTQsImV4cCI6MjA1NTE5ODM5NH0.bXupegfuogKiPGyHsgkJ0TAQnkr0FRH55_DnyTtus4Y'

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
} 