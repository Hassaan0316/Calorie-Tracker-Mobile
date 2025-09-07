import { View, Text } from 'react-native';
import { environment } from '../../config/env.config';

export default function HomeScreen() {
  console.log('HomeScreen rendered');

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold mb-4 text-black">
        Welcome to Calorie Tracker
      </Text>
      <Text className="text-gray-600">
        Firebase Key: {environment.EXPO_PUBLIC_FIREBASE_API_KEY_ANDROID || 'Not found'}
      </Text>
    </View>
  );
}