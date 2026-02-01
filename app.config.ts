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
            // Voltamos para o 34 para o S25 Ultra aceitar o arquivo
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            minSdkVersion: 24
          }
        }
      ],
      // ESTE PLUGIN VAI FORÇAR A VERSÃO CORRETA DO SPLASHSCREEN
      [
        "expo-build-properties",
        {
          android: {
            extraMavenRepos: ["https://maven.google.com"],
            // Forçamos o Gradle a ignorar a versão alpha02 e usar a estável
            packagingOptions: {
              pickFirst: ["**/libc++_shared.so"]
            }
          }
        }
      ]
    ]
  };
};
