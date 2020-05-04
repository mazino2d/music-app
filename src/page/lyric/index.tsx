import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SongApi, {
  InfoMediaType,
  LyricSentenceType,
  LyricType,
  LyricWordType,
} from '../../service/song';
import {playlistContext} from '../../store/playlist';

const Lyric: FC = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [lyric, setLyric] = useState<LyricType>();
  const playlistStore = useContext(playlistContext);

  useEffect(() => {
    const songId: InfoMediaType | undefined =
      playlistStore?.playlist[playlistStore?.selectedSong];

    if (songId) {
      (async () => {
        const data: LyricType = await SongApi.mGet.getLyric(songId.idMedia);
        setLyric(data);
      })();
    }
  }, []);

  const renderLyric = () => {
    return lyric?.listData.map((sen: LyricSentenceType) => {
      let tenseStyle: StyleProp<TextStyle>;

      if (
        playlistStore &&
        playlistStore.currentTime * 1000 <= sen.endTime &&
        playlistStore.currentTime * 1000 >= sen.startTime
      ) {
        tenseStyle = styles.currentTense;
      } else tenseStyle = styles.tense;

      return (
        <Text key={sen.startTime} style={styles.tense}>
          {sen.listData.map((word: LyricWordType) => {
            return (
              <Text key={word.startTime} style={tenseStyle}>
                {`${word.data.toLocaleUpperCase()} `}
              </Text>
            );
          })}
        </Text>
      );
    });
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      {renderLyric()}
    </ScrollView>
  );
};

export default Lyric;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tense: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    color: 'rgba(255, 255, 255, 1.0)',
  },
  currentTense: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    color: 'rgba(255, 211, 0, 1.0)',
  },
});
