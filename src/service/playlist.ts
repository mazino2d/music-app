import ZAxios from './zaxios';

const host = 'https://zmd.zingmp3.vn/api/v1';
const devHost = 'http://localhost:9043/api/v1';
const infoSrc = 'src=AppZMD';

export default {
  mGet: {
    getInfoMedia: async (listSongId: number[]) => {
      const url = `${host}/songs?ids=${listSongId}&fields=id,title,cover,link,listArtist,listGenre,linkBeat&${infoSrc}`;
      const {data} = await ZAxios.get(`${url}`);
      const result: InfoMediaType[] = data;

      return result;
    },
    getLyric: async (songId: number) => {
      const url = `${host}/songs?ids=${songId}&fields=lyric&${infoSrc}`;
      const {data} = await ZAxios.get(`${url}`);
      const result: LyricType = data[0].lyric;

      return result;
    },
  },
};

export interface InfoMediaType {
  id: number;
  title: string;
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
