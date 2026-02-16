import { isWeb } from '@/utils/constants/platform';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createClient,
  processLock,
  SupabaseClient,
} from '@supabase/supabase-js';
import { AppState, Platform } from 'react-native';

let supabase: SupabaseClient | null = null;

export function getSupabaseClient() {
  if (!supabase) {
    const auth: any = {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: isWeb,
    };
    if (!isWeb) {
      auth.storage = AsyncStorage;
      auth.lock = processLock;
    }

    supabase = createClient(
      process.env.EXPO_PUBLIC_SUPABASE_URL!,
      process.env.EXPO_PUBLIC_SUPABASE_API_KEY!,
      {
        auth,
      },
    );

    if (Platform.OS !== 'web') {
      AppState.addEventListener('change', (state) => {
        const supa = getSupabaseClient();
        if (state === 'active') {
          supa.auth.startAutoRefresh();
        } else {
          supa.auth.stopAutoRefresh();
        }
      });
    }
  }

  return supabase;
}
