import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface ISafeAreaViewProps {
  children: React.ReactNode;
}

const SafeAreaViewProvider = ({ children }: ISafeAreaViewProps) => {
  console.log('SafeAreaViewProvider rendered');
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SafeAreaViewProvider;