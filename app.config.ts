import { ExpoConfig, ConfigContext } from 'expo/config';
import path from 'path';

export default ({ config }: ConfigContext): ExpoConfig => {
  // Calculamos o caminho absoluto para o arquivo na raiz do projeto
  const googleServicePath = path.resolve(__dirname, 'google-services.json');

  return {
    name: 'AL-Solution Chat',
    slug: 'alsolution-chat',
    version: '4.3.13',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: false,
    scheme: 'alsolutionapp',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      bundleIdentifier: 'br.net.alsolution.chatwoot',
      googleServicesFile: googleServicePath, // Caminho absoluto injetado
      supportsTablet: true,
    },
    android: {
      package: 'br.net.alsolution.chatwoot',
      googleServicesFile: googleServicePath, // Caminho absoluto injetado
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    extra: {
      eas: {
        projectId: "daec7403-6417-4afa-be86-18ead645d294",
      },
    },
    plugins: [
      'expo-font',
      '@react-native-firebase/app',
      '@react-native-firebase/messaging',
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            minSdkVersion: 24,
          },
        },
      ],
    ],
  };
};
