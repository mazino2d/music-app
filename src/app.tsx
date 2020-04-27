import React, {FC} from 'react';
import Player from './page/player';


const App: FC = () => {
  return (
    <Player
      title="ZMP Player"
      song="Chạy Ngay Đi"
      artist="Sơn Tùng M-TP"
      songURI="http://mp3-s1-m-zmp3.zadn.vn/4480ef703f34d66a8f25/2437095196596911444?authen=exp=1588143940~acl=/4480ef703f34d66a8f25/*~hmac=249621b77d41f85a65c892d8a06f1461"
      artURI="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"
    />
  );
};

export default App;
