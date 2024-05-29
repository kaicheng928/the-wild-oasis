import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wvimbzttzumcknlqbcal.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2aW1ienR0enVtY2tubHFiY2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2OTA5NjAsImV4cCI6MjAzMTI2Njk2MH0.6l9dskNdAVIq0cKR9xbaNRv-ABWKhcfkz9IOffrSDIY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
