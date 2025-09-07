import { Slot, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SafeAreaViewProvider from '../components/commonComponents/SafeAreaViewProvider';
import ReduxProvider from '../redux/ReduxProvider';
import '../styles/global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ReduxProvider>
      <SafeAreaViewProvider>
        <StatusBar style={isDark ? 'light' : 'dark'} />
        <Slot />
      </SafeAreaViewProvider>
    </ReduxProvider>
  );
}