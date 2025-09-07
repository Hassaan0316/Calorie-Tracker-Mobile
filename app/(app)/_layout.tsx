import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function AppLayout() {
  console.log('AppLayout rendered');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? '#000' : '#fff',
        },
        headerTintColor: isDark ? '#fff' : '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: true,
        contentStyle: {
          backgroundColor: isDark ? '#000' : '#fff',
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Calorie Tracker',
          headerStyle: {
            backgroundColor:'red',
          },
        }}
      />
    </Stack>
  );
}
