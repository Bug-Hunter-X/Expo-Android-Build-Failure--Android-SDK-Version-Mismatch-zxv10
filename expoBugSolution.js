The solution involves using the Android SDK Manager to verify the correct version is installed.  Then, you may need to update the `android/app/build.gradle` file in your Expo project to reflect the version of the Android SDK you actually have installed.

1. **Open Android SDK Manager:** Launch the Android SDK Manager (usually accessible through the Android Studio SDK Manager).  
2. **Check Installed Packages:** Make sure that the Android SDK build-tools, platform-tools and the correct version of the Android SDK platform are installed. 
3. **Verify SDK Path:** Check that the ANDROID_HOME environment variable is correctly set to point to your Android SDK installation directory.  Expo relies on this path to find your SDK components. 
4. **Update `build.gradle`:** If the version in your `android/app/build.gradle` file does not match your installed SDK, adjust it accordingly.  If your SDK is updated, you may need to update both `compileSdkVersion`, `minSdkVersion`, and `targetSdkVersion`. 
5. **Clean and Rebuild:** After making any changes to the `build.gradle` file, clean and rebuild your Expo project using the Expo CLI: `expo prebuild`, then `expo run:android` 