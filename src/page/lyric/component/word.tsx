import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {LyricWordType} from 'src/service/song';

export interface WordProps {
  word: LyricWordType;
  isHighlight: boolean;
}

const Word: FC<WordProps> = (props) => {
  let wordStyle;

  if (props.isHighlight) wordStyle = styles.highlight;
  else wordStyle = styles.normal;

  return <Text style={wordStyle}>{`${props.word.data} `}</Text>;
};

export default React.memo(Word);

const styles = StyleSheet.create({
  highlight: {
    textDecorationLine: 'underline',
  },
  normal: {
    textDecorationLine: 'none',
  },
});
