import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {LyricWordType} from 'src/service/song';
import {Level} from './level';
import Word from './word';

export interface SentenceProps {
  sentence: LyricWordType[];
  isHighlight: boolean;
  indexSeek: number;
}

const Sentence: FC<SentenceProps> = (props) => {
  return (
    <Text style={styles.sentense}>
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

const styles = StyleSheet.create({
  sentense: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 10,
  },
});
