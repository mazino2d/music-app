import React, {FC, useEffect} from 'react';
import Player, {Track} from './page/player';
import SongApi from './service/song';

const tracks: Track[] = [
  {
    song: 'Chạy Ngay Đi',
    artist: 'Sơn Tùng M-TP',
    songURI:
      'http://mp3-s1-m-zmp3.zadn.vn/4480ef703f34d66a8f25/2437095196596911444?authen=exp=1588143940~acl=/4480ef703f34d66a8f25/*~hmac=249621b77d41f85a65c892d8a06f1461',
    artURI:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg',
  },
];

const App: FC = () => {
  useEffect(() => {
    (async () => {
      const data = await SongApi.mGet.getInfoMedia(1073981322);

      const track: Track = {
        song: data[0].title,
        artist: data[0].listArtist[0],
        songURI: data[0].link,
        artURI:
          'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/7/c/9/97c960ac271e94fa47c87a12aa7d3be5.jpg',
      };

      tracks.push(track);
    })();
  });

  return <Player title="ZMP Player" tracks={tracks} />;
};

export default App;
