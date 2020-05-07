import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Level} from './level';

export interface WordProps {
  word: string;
  level: Level;
}

const Word: FC<WordProps> = (props) => {
  let wordStyle;

  switch (props.level) {
    case Level.LOW:
      wordStyle = styles.low;
      break;
    case Level.MID:
      wordStyle = styles.mid;
      break;
    case Level.HIGH:
      wordStyle = styles.high;
      break;
    default:
      wordStyle = styles.low;
  }

  return <Text style={wordStyle}>{`${props.word} `}</Text>;
};

export default React.memo(Word);

const styles = StyleSheet.create({
  low: {
    color: 'rgba(255, 255, 255, 1.0)',
  },
  mid: {
    color: 'rgba(255, 211, 0, 1.0)',
  },
  high: {
    color: 'rgba(0, 100, 255, 1.0)',
    fontWeight: 'bold',
  },
});
