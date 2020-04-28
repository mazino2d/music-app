import Axios from 'axios';
const host = 'https://zmediadata.zingmp3.vn/api';
const infoSrc = 'infoSrc=webZMD';

export default {
  mGet: {
    getInfoMedia: async (idSong: number) => {
      const url = `${host}/song/mGetInfoMedia?listKey=${idSong}&${infoSrc}`;
      const {data} = await Axios.get(`${url}`);

      return data;
    },
  },
};
