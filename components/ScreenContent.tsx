import { Text, View } from 'react-native';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className="flex-1 bg-red-400 p-2">
      <Text className="text-xl font-bold text-blue-500">Welcome to Nativewind sf!</Text>
    </View>
  );
};
