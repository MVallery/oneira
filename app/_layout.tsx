import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import 'react-native-reanimated';

import Header from '@/components/layout/Header';
import { store } from '@/state/store';
import { ThemeProvider, useAppTheme } from '@/state/themeContext';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();
import { ErrorPage } from '@/features/base/ErrorPage';
import { isWeb } from '@/utils/constants/platform';
import ErrorBoundary from '@/utils/errorBoundary';
import { Portal } from 'react-native-paper';
// import { GoogleAnalytics } from '@/features/base/GoogleAnalytics';
// fix for structuredClone not being available in mobile
if (typeof global.structuredClone === 'undefined') {
  global.structuredClone = (value) => JSON.parse(JSON.stringify(value));
}
export default function RootLayout() {
  const { theme, setTheme } = useAppTheme();
  const { colors } = theme;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const styles = StyleSheet.create({
    mainLayout: {
      backgroundColor: colors.background,
      color: colors.onBackground,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // for now mobile has no main header, so give it a bit of padding
      paddingTop: isWeb ? 0 : 0,
    },
  });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }
  const [appIsReady, setAppIsReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    async function prepare() {
      // Keep the splash screen visible
      await SplashScreen.preventAutoHideAsync();
      // Do what you need before the splash screen gets hidden
      console.log(
        "I'm a task that gets executed before splash screen disappears",
      );
      // Then tell the application to render
      setAppIsReady(true);
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // return (
  // <MaintenancePage/>
  // );
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider>
          <Provider store={store}>
            {/* <AuthProvider> */}
            <SafeAreaProvider>
              <Portal.Host>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                  <StatusBar style='light' backgroundColor={'red'} />
                  {(isWeb || pathname.startsWith('/')) && <Header />}
                  <View style={{ flex: 1 }}>
                    {/* {isWeb && <GoogleAnalytics />} */}

                    <Stack
                      screenOptions={{
                        contentStyle: styles.mainLayout,
                        headerShown: false,
                      }}
                    ></Stack>
                  </View>
                </SafeAreaView>
              </Portal.Host>
            </SafeAreaProvider>
            {/* </AuthProvider> */}
          </Provider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}

// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/use-color-scheme';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }
