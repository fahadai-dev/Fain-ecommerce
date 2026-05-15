import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iacbtnrbojddooelfptv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhY2J0bnJib2pkZG9vZWxmcHR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMDIxNDEsImV4cCI6MjA5MzU3ODE0MX0.ILq1WtYfdgZMMyXks-HdjSrxw3JcJfZfZuGHCPFdFpg";

export const supabase = createClient(supabaseUrl, supabaseKey);