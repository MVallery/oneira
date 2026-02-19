import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateUserMutation } from '../state/authApi';
// import { getSupabaseClient } from '../supabase/supabase';
// const supabase = getSupabaseClient();

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [createUser] = useCreateUserMutation();

  const signup = async (acctData: any) => {
    setLoading(true);

    // try {
    //   const { data, error } = await supabase.auth.signUp({
    //     email: acctData.email,
    //     password: acctData.password,
    //     options: {
    //       emailRedirectTo: isWeb
    //         ? process.env.EXPO_PUBLIC_URL
    //         : process.env.EXPO_PUBLIC_URL_MOBILE,
    //     },
    //   });
    //   if (error) {
    //     // console.error('Error signing up:', error);
    //     setError(error.message);
    //   } else if (data.user) {
    //     // console.log('Sign up successful:', data);
    //     setData(data);
    //     const userData = await createUser({
    //       id: data.user.id,
    //       type: 'Teacher',
    //       email: data.user.email || '',
    //       settings: initialAccountState.settings,
    //     }).unwrap();

    //     dispatch(setUser(userData));
    //     dispatch(setTeacher(userData.teacher));
    //   }
    // } catch (err) {
    //   console.error('Error during signup:', err);
    //   setError(
    //     'An error occurred during signup. Please verify your email, and if you already have an account, try logging in instead.',
    //   );
    // }
    setLoading(false);
  };
  return { signup, error, data, loading };
};
