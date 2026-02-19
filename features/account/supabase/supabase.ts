import {
  SupabaseClient
} from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

export function getSupabaseClient() {
  // if (!supabase) {
  //   const auth: any = {
  //     autoRefreshToken: true,
  //     persistSession: true,
  //     detectSessionInUrl: isWeb,
  //   };
  //   if (!isWeb) {
  //     auth.storage = AsyncStorage;
  //     auth.lock = processLock;
  //   }

  //   supabase = createClient(
  //     process.env.EXPO_PUBLIC_SUPABASE_URL!,
  //     process.env.EXPO_PUBLIC_SUPABASE_API_KEY!,
  //     {
  //       auth,
  //     },
  //   );

  //   if (Platform.OS !== 'web') {
  //     AppState.addEventListener('change', (state) => {
  //       const supa = getSupabaseClient();
  //       if (state === 'active') {
  //         supa.auth.startAutoRefresh();
  //       } else {
  //         supa.auth.stopAutoRefresh();
  //       }
  //     });
  //   }
  // }

  return supabase;
}
