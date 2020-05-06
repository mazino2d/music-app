# How to export debug apk file (Android)

```
react-native link react-native-vector-icons
react-native bundle --platform android --dev false \
--entry-file index.js --assets-dest android/app/src/main/res/ \
--bundle-output android/app/src/main/assets/index.android.bundle
cd android && ./gradlew assembleDebug
```
