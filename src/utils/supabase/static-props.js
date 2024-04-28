const { createClient: createClientPrimitive } = require('@supabase/supabase-js');

function createClient() {
  const supabase = createClientPrimitive(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  return supabase;
}

module.exports = { createClient };
