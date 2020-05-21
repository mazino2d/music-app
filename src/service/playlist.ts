import ZAxios from '../utils/zaxios';

const host = 'https://zmd.zingmp3.vn/api/v1';
const infoSrc = 'infoSrc=webZMD';

export default {
  mGet: {
    getInfoMedia: async (listSongId: number[]) => {
      const url = `${host}/song/getMediaInfo?ids=${listSongId}&fields=cover,link,listArtist,listGenre,linkBeat`;
      const {data} = await ZAxios.get(`${url}`);
      const result: InfoMediaType[] = data;

      return result;
    },
    getLyric: async (songId: number) => {
      const url = `${host}/song/lyric?typeReq=get&ids=${songId}&${infoSrc}`;
      const {data} = await ZAxios.get(`${url}`);
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
  linkBeat: string;
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
