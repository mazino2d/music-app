import React, {FC, useContext, useEffect, useRef} from 'react';
import {ScrollView} from 'react-native';
import {LyricSentenceType, LyricWordType} from 'src/service/song';
import {playlistContext} from '../../store/playlist';
import Lyric from './component/lyric';

const lineHeight = 33;

const searchSeek = (
  currentTime: number,
  oldValue: number,
  listData: LyricSentenceType[] | LyricWordType[] | undefined,
) => {
  if (!listData) return -1;

  let indexSeek = -1;

  for (const [index, element] of listData.entries()) {
    if (element.startTime <= currentTime && currentTime < element.endTime) {
      indexSeek = index;
      break;
    }
  }

  if (indexSeek === -1) return oldValue;
  else return indexSeek;
};

const LyricPlayer: FC = () => {
  const playlistStore = useContext(playlistContext);
  if (!playlistStore || !playlistStore.lyric) return <></>;
  const scrollViewRef = useRef<ScrollView>(null);

  const idxSeekSen = useRef(-1);
  const idxSeekWord = useRef(-1);

  const currentTime = playlistStore.currentTime * 1000;

  const listSen = playlistStore.lyric.listData;

  idxSeekSen.current = searchSeek(currentTime, idxSeekSen.current, listSen);

  const listWord = listSen[idxSeekSen.current]?.listData;

  idxSeekWord.current = searchSeek(currentTime, idxSeekWord.current, listWord);

  useEffect(() => {
    scrollViewRef.current?.scrollResponderScrollTo({
      x: 0,
      y: lineHeight * idxSeekSen.current - 10 * lineHeight,
      animated: true,
    });
  }, [idxSeekSen.current]);

  return (
    <ScrollView ref={scrollViewRef}>
      <Lyric
        lyric={playlistStore.lyric.listData}
        idxSeekSen={idxSeekSen.current}
        idxSeekWord={idxSeekWord.current}
      />
    </ScrollView>
  );
};

export default LyricPlayer;
