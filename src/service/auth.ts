import Axios from 'axios';
const host = 'https://zmd.zingmp3.vn/api/v1/auth/pwd';
const clientId =
  '04849E02E202B05569C3E8994C3C7C5B1F72D3E89D89D9873CF4F01DA3DC115D';

export default {
  post: {
    login: async (username: string, password: string) => {
      const body = {
        clientId,
        username,
        password,
      };
      const {data} = await Axios.post(`${host}`, body);
      const result: SuccessTokenType | FailTokenType = data;

      return result;
    },
  },
};

export interface SuccessTokenType {
  accessToken: string;
  refreshToken: string;
}

export interface FailTokenType {
  err: number;
  msg: string;
}
