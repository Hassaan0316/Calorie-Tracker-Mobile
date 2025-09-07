import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import SafeAreaViewProvider from 'components/commonComponents/SafeAreaViewProvider';

import ReduxProvider from 'redux/ReduxProvider';
import { environment } from 'config/env.config';
import './styles/global.css';

export default function App() {
  console.log('App', environment.API_URL, environment.EXPO_PUBLIC_FIREBASE_API_KEY);

  return (
    <>
      <ReduxProvider>
        <SafeAreaViewProvider>
          <ScreenContent title="Home" path="App.tsx" />
        </SafeAreaViewProvider>
      </ReduxProvider>
      <StatusBar style="auto" />
    </>
  );
}
