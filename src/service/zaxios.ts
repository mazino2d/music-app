import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';

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

export default ZAxios;
