import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {LyricSentenceType} from 'src/service/song';
import Sentence from './sentence';

export interface LyricProps {
  lyric: LyricSentenceType[];
  indexSeekSentence: number;
  indexSeekWord: number;
}

const Lyric: FC<LyricProps> = (props) => {
  return (
    <ScrollView>
      {props.lyric.map((value: LyricSentenceType, index: number) => {
        let isHighlight = false;
        if (index === props.indexSeekSentence) {
          isHighlight = true;
        }

        return (
          <Sentence
            key={index}
            sentence={value.listData}
            isHighlight={isHighlight}
            indexSeek={props.indexSeekWord}
          />
        );
      })}
    </ScrollView>
  );
};

export default React.memo(Lyric);
