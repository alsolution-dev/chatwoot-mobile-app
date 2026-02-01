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
    android: {
      package: 'br.net.alsolution.chatwoot',
      googleServicesFile: './google-services.json',
      // Adicionamos suporte explícito para arquiteturas modernas
      softwareKeyboardLayoutMode: "pan",
    },
    ios: {
      bundleIdentifier: 'br.net.alsolution.chatwoot',
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
            // MUDAMOS PARA 34 PARA GARANTIR COMPATIBILIDADE COM O S25 ULTRA
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            minSdkVersion: 24,
            // Forçamos a compilação de bibliotecas estáveis
            enableApex: false 
          }
        }
      ]
    ]
  };
};
