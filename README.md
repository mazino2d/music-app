# How to export apk file (android, debug)

```
react-native bundle --platform android --dev false \
--entry-file index.js --assets-dest android/app/src/main/res/ \
--bundle-output android/app/src/main/assets/index.android.bundle

cd android && ./gradlew assembleDebug
```

# How to export aab file (android, release)

```
cd android && ./gradlew bundleRelease
```
