import fs from 'fs';

export default ({ config }) => {
  if (process.env.GOOGLE_SERVICES_JSON_CONTENT) {
    fs.writeFileSync('./google-services.json', process.env.GOOGLE_SERVICES_JSON_CONTENT);
  }

  return {
    ...config,
    name: 'AL-Solution Chat',
    slug: 'alsolution-chat',
    version: '4.3.13',
    ios: {
      bundleIdentifier: 'br.net.alsolution.chatwoot',
      googleServicesFile: './google-services.json',
    },
    android: {
      package: 'br.net.alsolution.chatwoot',
      googleServicesFile: './google-services.json',
    },
    extra: {
      eas: { projectId: "daec7403-6417-4afa-be86-18ead645d294" }
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
            // Isso ignora conflitos de bibliotecas que exigem versões maiores
            extraMavenRepos: ["https://maven.google.com"]
          }
        }
      ]
    ]
  };
};
