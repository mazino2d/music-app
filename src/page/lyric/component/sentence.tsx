import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {LyricSentenceType, LyricWordType} from 'src/service/song';
import Word from './word';

export interface SentenceProps {
  sentence: LyricSentenceType;
  isHighlight: boolean;
  currentTime: number;
}

const Sentence: FC<SentenceProps> = (props) => {
  let sentenceStyle = styles.normal;
  if (props.isHighlight) {
    sentenceStyle = styles.highlight;
  }

  return (
    <Text style={sentenceStyle}>
      {props.sentence.listData.map((value: LyricWordType, index: number) => {
        const isHighlight =
          props.isHighlight &&
          props.currentTime <= value.endTime &&
          props.currentTime >= value.startTime;

        return <Word key={index} word={value} isHighlight={isHighlight} />;
      })}
    </Text>
  );
};

const shouldComponentUpdate = (
  prevProps: Readonly<React.PropsWithChildren<SentenceProps>>,
  nextProps: Readonly<React.PropsWithChildren<SentenceProps>>,
) => !(prevProps.isHighlight || nextProps.isHighlight);

export default React.memo(Sentence, shouldComponentUpdate);

const styles = StyleSheet.create({
  highlight: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    color: 'rgba(255, 211, 0, 1.0)',
  },
  normal: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    color: 'rgba(255, 255, 255, 1.0)',
  },
});
