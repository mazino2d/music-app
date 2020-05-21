import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import AuthApi, {TokenType} from '../service/auth';

const ZAxios = Axios.create();

ZAxios.interceptors.request.use(
  (config) =>
    (async () => {
      const accessToken = await AsyncStorage.getItem('AccessToken');
      if (accessToken) config.headers.AccessToken = accessToken;

      return config;
    })(),
  (error) => {
    Promise.reject(error);
  },
);

ZAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    return (async () => {
      const refreshToken = await AsyncStorage.getItem('RefreshToken');
      if (refreshToken) {
        const token: TokenType = await AuthApi.post.refreshToken(refreshToken);
        AsyncStorage.setItem('AccessToken', token.accessToken);
        ZAxios.defaults.headers.AccessToken = token.accessToken;

        return ZAxios(originalRequest);
      }
    })();
  },
);

export default ZAxios;
