import Axios from 'axios';
const host = 'https://zmediadata.zingmp3.vn/api';
const infoSrc = 'infoSrc=webZMD';

export default {
  mGet: {
    getInfoMedia: async (listSongId: number[]) => {
      const url = `${host}/song/mGetInfoMedia?isGetCover=1&listKey=${listSongId}&${infoSrc}`;
      const {data} = await Axios.get(`${url}`);
      const result: InfoMediaType[] = data;

      return result;
    },
    getLyric: async (songId: number) => {
      const url = `${host}/song/lyric?typeReq=get&ids=${songId}&${infoSrc}`;
      const {data} = await Axios.get(`${url}`);
      const result: LyricType = data[0];

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

export interface LyricWordType {
  startTime: number;
  endTime: number;
  data: string;
}

export interface LyricSentenceType {
  startTime: number;
  endTime: number;
  listData: LyricWordType[];
}

export interface LyricType {
  id: number;
  version: number;
  listData: LyricSentenceType[];
}
