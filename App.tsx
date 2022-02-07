import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox } from 'react-native';
import { Home } from './src/pages/Home';
import Routes from './src/routes';

LogBox.ignoreLogs(["[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!","Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function."])

export default function App() {

  const [fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light"/>
      <Routes/>
    </>
  );
}

