import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bjvufbbbapgztshclhzc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdnVmYmJiYXBnenRzaGNsaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MjY2MDIsImV4cCI6MjA5NTAwMjYwMn0.PX8zkyuCAO5XXge5AyfSpuYXHbTo5Q8hqFSH-4CeeoA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
