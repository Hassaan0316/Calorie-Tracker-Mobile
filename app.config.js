module.exports = ({ config }) => {
  // Get the environment from the process or default to development
  const ENV = process.env.APP_ENV || process.env.NODE_ENV || 'development';

  return {
    ...config,
    android: {
      ...config.android,
      package: "com.calorietracker.com"
    },
    ios: {
      ...config.ios,
      bundleIdentifier: "com.calorieTracker.co"
    },
    extra: {
      ENV,
      EXPO_PUBLIC_FIREBASE_API_KEY_ANDROID: process.env.EXPO_PUBLIC_FIREBASE_API_KEY_ANDROID,
      EXPO_PUBLIC_FIREBASE_APP_ID_ANDROID: process.env.EXPO_PUBLIC_FIREBASE_APP_ID_ANDROID,
      EXPO_PUBLIC_FIREBASE_API_KEY_IOS: process.env.EXPO_PUBLIC_FIREBASE_API_KEY_IOS,
      EXPO_PUBLIC_FIREBASE_APP_ID_IOS: process.env.EXPO_PUBLIC_FIREBASE_APP_ID_IOS,
      EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
      EXPO_PUBLIC_FIREBASE_PROJECT_ID: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
      EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
      EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    },
  };
};