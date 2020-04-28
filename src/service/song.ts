import Axios from 'axios';
const host = 'https://zmediadata.zingmp3.vn/api';
const infoSrc = 'infoSrc=webZMD';

export default {
  mGet: {
    getInfoMedia: async (listIdSong: number[]) => {
      const url = `${host}/song/mGetInfoMedia?isGetCover=1&listKey=${listIdSong}&${infoSrc}`;
      const {data} = await Axios.get(`${url}`);
      const result: InfoMediaType[] = data;

      return result;
    },
  },
};

export interface InfoMediaType {
  idMedia: number;
  isOfficial: number;
  title: string;
  listIdArtist: number[];
  listIdGenre: number[];
  listGenre: string[];
  listArtist: string[];
  link: string;
  cover: string;
}
