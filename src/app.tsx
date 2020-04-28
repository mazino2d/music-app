import React, {FC} from 'react';
import Player, {Tracks} from './page/player';

const tracks: Tracks[] = [
  {
    song: 'Chạy Ngay Đi 1',
    artist: 'Sơn Tùng M-TP',
    songURI:
      'http://mp3-s1-m-zmp3.zadn.vn/4480ef703f34d66a8f25/2437095196596911444?authen=exp=1588143940~acl=/4480ef703f34d66a8f25/*~hmac=249621b77d41f85a65c892d8a06f1461',
    artURI:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg',
  },
  {
    song: 'Chạy Ngay Đi 2',
    artist: 'Sơn Tùng M-TP',
    songURI:
      'http://mp3-s1-m-zmp3.zadn.vn/beee9b0a4b4ea210fb5f/4596986270016260394?authen=exp=1588155957~acl=/beee9b0a4b4ea210fb5f/*~hmac=718092cc0d7e89f3a4164dee6cf7ef16',
    artURI:
      'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/b/b/4/1/bb41fd797505cf44f757a7157609177b.jpg',
  },
  {
    song: 'Chạy Ngay Đi 3',
    artist: 'Sơn Tùng M-TP',
    songURI:
      'http://mp3-s1-m-zmp3.zadn.vn/c42e75caa58e4cd0159f/5409116585793245991?authen=exp=1588156096~acl=/c42e75caa58e4cd0159f/*~hmac=4bc977fe1ea68ec2e4605305156bc361',
    artURI:
      'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/e/1/4/b/e14b20bb48a29390e24ef5aca6e4c60b.jpg',
  },
];
const App: FC = () => {
  return <Player title="ZMP Player" tracks={tracks} />;
};

export default App;
