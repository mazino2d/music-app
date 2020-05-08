import React, {FC} from 'react';
import {Text} from 'react-native';
import {lyricWordStyles} from '../../../theme/dark';
import {Level} from './level';

export interface WordProps {
  word: string;
  level: Level;
}

const Word: FC<WordProps> = (props) => {
  let wordStyle;

  switch (props.level) {
    case Level.LOW:
      wordStyle = lyricWordStyles.low;
      break;
    case Level.MID:
      wordStyle = lyricWordStyles.mid;
      break;
    case Level.HIGH:
      wordStyle = lyricWordStyles.high;
      break;
    default:
      wordStyle = lyricWordStyles.low;
  }

  return <Text style={wordStyle}>{`${props.word} `}</Text>;
};

export default React.memo(Word);
