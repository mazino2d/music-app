import React, {FC, useContext} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {LyricSentenceType} from '../../service/song';
import {playlistContext} from '../../store/playlist';
import Sentence from './component/sentence';

const Lyric: FC = () => {
  const playlistStore = useContext(playlistContext);
  if (!playlistStore) return <></>;

  const currentTime = playlistStore.currentTime * 1000;

  const renderLyric = () => {
    return playlistStore.lyric?.listData.map(
      (sentence: LyricSentenceType, index: number) => {
        const isHighlight =
          currentTime <= sentence.endTime && currentTime >= sentence.startTime;

        return (
          <Sentence
            key={index}
            sentence={sentence}
            isHighlight={isHighlight}
            currentTime={currentTime}
          />
        );
      },
    );
  };

  return <ScrollView>{renderLyric()}</ScrollView>;
};

export default Lyric;
