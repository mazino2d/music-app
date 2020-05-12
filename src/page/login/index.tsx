import {useNavigation} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {
  Alert,
  Button,
  ImageBackground,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import AuthApi, {FailTokenType, SuccessTokenType} from '../../service/auth';
import {authContext} from '../../store/auth';
import {loginPageStyles} from '../../theme/dark';

const Login: FC = () => {
  const authStore = useContext(authContext);
  if (!authStore) return <></>;
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onPressLoginButton = () => {
    (async () => {
      const data: SuccessTokenType | FailTokenType = await AuthApi.post.login(
        username,
        password,
      );

      if (!(data as FailTokenType).msg) {
        const accessToken = (data as SuccessTokenType).accessToken;
        const refreshToken = (data as SuccessTokenType).refreshToken;
        authStore.setAccessToken(accessToken);
        authStore.setRefreshToken(refreshToken);
        authStore.setErrorCode(0);
        authStore.setErrorMessage('');
        navigation.navigate('Home');
      } else {
        const err = (data as FailTokenType).err;
        const msg = (data as FailTokenType).msg;
        authStore.setAccessToken('');
        authStore.setRefreshToken('');
        authStore.setErrorCode(err);
        authStore.setErrorMessage(msg);
        Alert.alert('Error', `${msg} (${err}).`);
      }
    })();
  };

  return (
    <ImageBackground
      source={{
        uri:
          'https://i.pinimg.com/originals/2a/57/e2/2a57e2929b4a57a9ab69c36dad95a8fc.jpg',
      }}
      resizeMode="cover"
      style={loginPageStyles.image}
      blurRadius={1}>
      <View style={loginPageStyles.container}>
        <SvgUri
          style={loginPageStyles.logo}
          width="250"
          height="200"
          uri="https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/logo-mp-3.svg"
        />
        <Text style={loginPageStyles.text}>Username:</Text>
        <TextInput
          style={loginPageStyles.input}
          value={username}
          placeholder="Enter your username"
          placeholderTextColor="gray"
          textContentType="username"
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={loginPageStyles.text}>Password:</Text>
        <TextInput
          style={loginPageStyles.input}
          value={password}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          textContentType="password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" color="purple" onPress={onPressLoginButton} />
      </View>
    </ImageBackground>
  );
};

export default Login;
