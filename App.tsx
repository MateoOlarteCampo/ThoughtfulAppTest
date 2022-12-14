import { StatusBar } from 'expo-status-bar';
import ThoughtfulProvider from './src/providers/ThoughtfulProvider';
import Home from './src/screens/Home/Home';
import { StyledSafeAreaView } from './styles';

export default function App() {
  return (
    <StyledSafeAreaView>
      <ThoughtfulProvider>
        <Home />
        <StatusBar style="auto" />
      </ThoughtfulProvider>
    </StyledSafeAreaView>
  );
}
