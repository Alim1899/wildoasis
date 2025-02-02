import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qelbbwwgowyxbgzojfww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlbGJid3dnb3d5eGJnem9qZnd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNTQ3OTMsImV4cCI6MjA1MzkzMDc5M30.cGiR-3aVi0vOw5QKaLIbGzhsT5x4aXwsGPtvMZCKWyQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
