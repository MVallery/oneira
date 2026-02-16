import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { router } from 'expo-router';
import { getSupabaseClient } from '../supabase/supabase';
import { setSupaUser, setTeacher, setUser } from '../state/authSlice';
const supabase = getSupabaseClient();

export const useLogout = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
    } else {
      dispatch(setUser({ id: '', email: '', type: 'Teacher' }));
      dispatch(setTeacher({ id: 0, user_id: '', type: '' }));
      dispatch(setSupaUser({ id: '', email: '' }));
      router.replace('/auth/login');
    }
  };

  return { logout, error };
};