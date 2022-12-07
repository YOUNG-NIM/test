import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'testing',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
		url: 'https://test-young-nim.vercel.app/',
		cleartext: true
	}
};

export default config;
