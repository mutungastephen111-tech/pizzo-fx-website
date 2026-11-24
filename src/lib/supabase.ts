
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://oimoeclkmksngbnuieva.supabase.co";

const supabasePublishableKey =
  "sb_publishable__Y8M9ZA3rMY1ha4Id6TpZw_Ka1ZftSn";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);
