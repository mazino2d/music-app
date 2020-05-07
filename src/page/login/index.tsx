import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';

const Login: FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ImageBackground
      source={{
        uri:
          'https://i.pinimg.com/originals/2a/57/e2/2a57e2929b4a57a9ab69c36dad95a8fc.jpg',
      }}
      resizeMode="cover"
      style={styles.image}
      blurRadius={1}>
      <View style={styles.container}>
        <SvgUri
          style={styles.logo}
          width="250"
          height="200"
          uri="https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/logo-mp-3.svg"
        />
        <Text style={styles.text}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Enter your username"
          placeholderTextColor="gray"
          textContentType="username"
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.text}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          textContentType="password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Login"
          color="purple"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 0,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.8)',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
  },
});
