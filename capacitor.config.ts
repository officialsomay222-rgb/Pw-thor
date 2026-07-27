import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.studythor.pwa',
  appName: 'Study Thor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://pw-thor-two.vercel.app',
    cleartext: true,
    allowNavigation: [
      '*'
    ]
  }
};

export default config;
