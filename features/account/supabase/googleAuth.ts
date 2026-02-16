// import * as AuthSession from 'expo-auth-session'
// import supabase from './supabase'

// export async function signInWithGoogle() {
//   const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true })

//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: 'google',
//     options: {
//       redirectTo: redirectUrl,
//     },
//   })

//   if (error) console.error(error)
//   else await AuthSession.startAsync({ authUrl: data.url })
// }