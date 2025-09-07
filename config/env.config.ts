import Constants from 'expo-constants';

// Define your environment variable types
interface EnvironmentVariables {
  API_URL: string;
  ENV: 'development' | 'staging' | 'production';
  EXPO_PUBLIC_FIREBASE_API_KEY: string;
  EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
  EXPO_PUBLIC_FIREBASE_PROJECT_ID: string;
  EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
  EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
  EXPO_PUBLIC_FIREBASE_APP_ID: string;
}

// Get the environment from Expo's manifest
const getEnvName = (): EnvironmentVariables['ENV'] => {
  const env = Constants.expoConfig?.extra?.ENV || process.env.NODE_ENV || 'development';
  if (env === 'production' || env === 'staging' || env === 'development') {
    return env;
  }
  return 'development';
};

// Environment-specific configurations
const ENV = {
  development: {
    API_URL: process.env.EXPO_PUBLIC_DEV_API_URL || 'http://localhost:3000',
    EXPO_PUBLIC_FIREBASE_API_KEY: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_API_KEY || '',
    EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    EXPO_PUBLIC_FIREBASE_PROJECT_ID: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_PROJECT_ID || '',
    EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    EXPO_PUBLIC_FIREBASE_APP_ID: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_APP_ID || '',
    ENV: 'development',
  },
  staging: {
    API_URL: process.env.EXPO_PUBLIC_STAGING_API_URL || 'https://staging-api.example.com',
    EXPO_PUBLIC_FIREBASE_API_KEY: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_API_KEY || '',
    EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    EXPO_PUBLIC_FIREBASE_PROJECT_ID: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_PROJECT_ID || '',
    EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    EXPO_PUBLIC_FIREBASE_APP_ID: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_APP_ID || '',
    ENV: 'staging',
  },
  production: {
    API_URL: process.env.EXPO_PUBLIC_PROD_API_URL || 'https://api.example.com',
    EXPO_PUBLIC_FIREBASE_API_KEY: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_API_KEY || '',
    EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    EXPO_PUBLIC_FIREBASE_PROJECT_ID: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_PROJECT_ID || '',
    EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    EXPO_PUBLIC_FIREBASE_APP_ID: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_APP_ID || '',
    ENV: 'production',
  },
} as const;

// Get the environment configuration
const getEnvironmentConfig = (): EnvironmentVariables => {
  const env = getEnvName();
  return ENV[env];
};

export const environment = getEnvironmentConfig();
