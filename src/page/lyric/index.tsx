import React, {FC, useContext} from 'react';
import {LyricSentenceType, LyricWordType} from 'src/service/song';
import {playlistContext} from '../../store/playlist';
import Lyric from './component/lyric';

const searchSeek = (
  currentTime: number,
  listData: LyricSentenceType[] | LyricWordType[] | undefined,
) => {
  if (!listData) return -1;

  let indexSeek = -1;

  for (const [index, element] of listData.entries()) {
    if (element.startTime < currentTime && currentTime < element.endTime) {
      indexSeek = index;
      break;
    }
  }

  return indexSeek;
};

const LyricPlayer: FC = () => {
  const playlistStore = useContext(playlistContext);
  if (!playlistStore || !playlistStore.lyric) return <></>;

  const currentTime = playlistStore.currentTime * 1000;

  const listSentence = playlistStore.lyric.listData;

  const indexSeekSentence = searchSeek(currentTime, listSentence);

  const listWord = listSentence[indexSeekSentence]?.listData;

  const indexSeekWord = searchSeek(currentTime, listWord);

  return (
    <Lyric
      lyric={playlistStore.lyric.listData}
      indexSeekSentence={indexSeekSentence}
      indexSeekWord={indexSeekWord}
    />
  );
};

export default LyricPlayer;
