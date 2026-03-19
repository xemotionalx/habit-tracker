# habit-tracker

Personal habit tracker (Expo / React Native).

## Run

```bash
npm install
npx expo start
```

Then open in Expo Go, a simulator, or the web target from the CLI.

## Development build (custom splash, native modules)

`SplashScreen.setOptions` and other native customizations do not run in **Expo Go**. Use a **development build** (your app + Expo dev tools).

### Option A — Local (fastest if you have Xcode / Android Studio)

```bash
npx expo run:ios
# or
npx expo run:android
```

The first run generates native projects, compiles, and installs a dev client on the simulator or a connected device. After that, start the bundler with `npx expo start` and open the app from the home screen (it will connect to Metro).

### Option B — EAS Build (good for physical devices without local toolchains)

1. Install and log in: `npm i -g eas-cli` then `eas login`
2. Link the project: `eas build:configure` (confirms `eas.json`)
3. Build a dev client:

   ```bash
   eas build --profile development --platform ios
   # and/or
   eas build --profile development --platform android
   ```

4. Install the build on your device (EAS gives a link / QR code).
5. Run `npx expo start --dev-client` and open the installed app.

iOS device builds need an [Apple Developer](https://developer.apple.com/) account; Android is usually simpler.

Expo Go can still be used for quick checks; splash options are skipped there (see `app/_layout.tsx`).
