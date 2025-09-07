import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ISafeAreaViewProps {
  children: React.ReactNode;
}

const SafeAreaViewProvider = ({ children }: ISafeAreaViewProps) => {
  return <SafeAreaView className='flex-1'>{children}</SafeAreaView>;
};

export default SafeAreaViewProvider;
