import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://aliltdblkhwtxvwqhipo.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsaWx0ZGJsa2h3dHh2d3FoaXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUzMjg1MzcsImV4cCI6MTk4MDkwNDUzN30.tyXQdp3IaQVFXP5odfmu2c-PZqY7fTr2LoDTg9IOR6Y"
export const portfolioClient = createClient(supabaseUrl, supabaseAnonKey)
