import { environment } from "config/env.config";

export const firebaseConfig = {
  apiKey: environment.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: environment.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: environment.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: environment.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: environment.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: environment.EXPO_PUBLIC_FIREBASE_APP_ID,
};