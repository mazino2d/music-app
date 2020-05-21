import React, {FC, useContext} from 'react';
import {Text} from 'react-native';
import {LyricWordType} from 'src/service/playlist';
import {playlistContext} from '../../../store/playlist';
import {lyricSentenceStyles} from '../../../theme/dark';
import {Level} from './level';
import Word from './word';

export interface SentenceProps {
  sentence: LyricWordType[];
  isHighlight: boolean;
  indexSeek: number;
}

const Sentence: FC<SentenceProps> = (props) => {
  const playlistStore = useContext(playlistContext);
  if (!playlistStore) return <></>;

  const startTime = props.sentence[0].startTime / 1000;

  return (
    <Text
      style={lyricSentenceStyles.sentense}
      onPress={() => playlistStore.seekBySecond(startTime)}>
      {props.sentence.map((value: LyricWordType, index: number) => {
        let level = Level.LOW;

        if (props.isHighlight) {
          level = Level.MID;
          if (props.indexSeek === index) level = Level.HIGH;
        }

        return <Word key={index} word={value.data} level={level} />;
      })}
    </Text>
  );
};

export default React.memo(Sentence);
