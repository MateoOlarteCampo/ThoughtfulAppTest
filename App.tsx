import { StatusBar } from 'expo-status-bar';
import ThoughtfulProvider from './src/providers/ThoughtfulProvider';
import Home from './src/screens/Home/Home';
import { StyledSafeAreaView } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StyledSafeAreaView onLayout={onLayoutRootView}>
      <ThoughtfulProvider>
        <Home />
        <StatusBar style="auto" />
      </ThoughtfulProvider>
    </StyledSafeAreaView>
  );
}
