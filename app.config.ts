import { ExpoConfig, ConfigContext } from 'expo/config';
import path from 'path';

export default ({ config }: ConfigContext): ExpoConfig => {
  // Caminho absoluto para garantir que o build local encontre o arquivo
  const googleServicePath = path.resolve(process.cwd(), 'google-services.json');

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
      enableFullScreenImage_legacy: true,
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'br.net.alsolution.chatwoot',
      infoPlist: {
        NSCameraUsageDescription: 'This app requires access to the camera to upload images and videos.',
        NSPhotoLibraryUsageDescription: 'This app requires access to the photo library to upload images.',
        NSMicrophoneUsageDescription: 'This app requires access to the microphone to record audio.',
        UIBackgroundModes: ['fetch', 'remote-notification'],
        ITSAppUsesNonExemptEncryption: false,
      },
      googleServicesFile: googleServicePath,
      entitlements: { 'aps-environment': 'production' },
      associatedDomains: ['applinks:saas.alsolution.net.br'],
    },
    android: {
      adaptiveIcon: { foregroundImage: './assets/adaptive-icon.png', backgroundColor: '#ffffff' },
      package: 'br.net.alsolution.chatwoot',
      permissions: ['android.permission.CAMERA', 'android.permission.RECORD_AUDIO'],
      googleServicesFile: googleServicePath,
      intentFilters: [
        {
          action: 'VIEW',
          autoVerify: true,
          data: [
            {
              scheme: 'https',
              host: 'saas.alsolution.net.br',
              pathPrefix: '/app/accounts/',
              pathPattern: '/*/conversations/*',
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    extra: {
      eas: {
        projectId: "daec7403-6417-4afa-be86-18ead645d294",
      },
    },
    plugins: [
      'expo-font',
      ['react-native-permissions', { iosPermissions: ['Camera', 'PhotoLibrary', 'MediaLibrary'] }],
      '@react-native-firebase/app',
      '@react-native-firebase/messaging',
      [
        'expo-build-properties',
        {
          android: {
            minSdkVersion: 24,
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            enableProguardInReleaseBuilds: true,
          },
          ios: { useFrameworks: 'static' },
        },
      ],
    ],
    androidNavigationBar: { backgroundColor: '#ffffff' },
  };
};
