import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dcgxvsyafrafecejhpdn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjZ3h2c3lhZnJhZmVjZWpocGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MzA3OTIsImV4cCI6MjA1MjQwNjc5Mn0.I4sNKNtN70rht5DDk8K7VR5qTdvXrw8b8wEJE8M_FCU';

const cms = createClient(supabaseUrl, supabaseAnonKey);

export default cms;