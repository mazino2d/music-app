import React, {FC} from 'react';
import {LyricSentenceType} from 'src/service/playlist';
import Sentence from './sentence';

export interface LyricProps {
  lyric: LyricSentenceType[];
  idxSeekSen: number;
  idxSeekWord: number;
}

const Lyric: FC<LyricProps> = (props) => (
  <>
    {props.lyric.map((value: LyricSentenceType, index: number) => {
      let isHighlight = false;
      if (index === props.idxSeekSen) {
        isHighlight = true;
      }

      return (
        <Sentence
          key={index}
          sentence={value.listData}
          isHighlight={isHighlight}
          indexSeek={props.idxSeekWord}
        />
      );
    })}
  </>
);

export default React.memo(Lyric);
