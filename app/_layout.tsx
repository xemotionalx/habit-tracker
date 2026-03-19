import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

// SplashScreen.setOptions is not supported in Expo Go (needs a dev / production build).
if (Constants.executionEnvironment !== ExecutionEnvironment.StoreClient) {
  SplashScreen.setOptions({
    duration: 1000,
    fade: true,
  });
}

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  
  return (
    <>
      <Slot />
      <StatusBar style="auto" />
    </>
  );
}
