import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.studythor.pwa',
  appName: 'Vidya X Owner',
  webDir: 'dist',
  server: {
    url: 'https://pw-thor-two.vercel.app',
    cleartext: true,
    allowNavigation: [
      '*'
    ]
  }
};

export default config;
