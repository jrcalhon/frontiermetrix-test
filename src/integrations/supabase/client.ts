
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uxjjhvzgtozgviutxwry.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ampodnpndG96Z3ZpdXR4d3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjY3MzIsImV4cCI6MjA2MTQ0MjczMn0.0jvPLtqUSRlG3wGAxenLkMhuujrYI3PGxixq-nPc5Hk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
    flowType: 'pkce', // This is important for secure authentication flow
    // The redirectTo option is moved to the correct method calls
  }
});
