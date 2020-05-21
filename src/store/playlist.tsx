import React, {createContext, FC, useEffect, useRef, useState} from 'react';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import SongApi, {
  InfoMediaType,
  LyricSentenceType,
  LyricType,
} from '../service/playlist';

interface PlaylistContext {
  playlist: InfoMediaType[];
  selectedSong: number;
  paused: boolean;
  shuffleOn: boolean;
  repeatOn: number;
  duration: number;
  currentTime: number;
  isBeat: boolean;
  lyric?: LyricType;
  onPressPlayOrPause: () => void;
  onPressRepeatOn: () => void;
  onPressShuffleOn: () => void;
  onPressNextTrack: () => void;
  onPressBackTrack: () => void;
  seekByPercent: (value: number) => void;
  seekBySecond: (second: number) => void;
  setPlaylist: React.Dispatch<React.SetStateAction<InfoMediaType[]>>;
  setSelectedSong: React.Dispatch<React.SetStateAction<number>>;
  setIsBeat: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlaylistProvider: FC = ({children}) => {
  const songRef = useRef<Video>(null);
  const beatRef = useRef<Video>(null);
  const initialState: InfoMediaType[] = [];

  const [playlist, setPlaylist] = useState(initialState);
  const [selectedSong, setSelectedSong] = useState(0);
  const [paused, setPaused] = useState(true);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isBeat, setIsBeat] = useState(false);
  const [lyric, setLyric] = useState<LyricType>();

  useEffect(() => {
    const song: InfoMediaType | undefined = playlist[selectedSong];

    if (song) {
      (async () => {
        const data: LyricType = await SongApi.mGet.getLyric(song.idMedia);
        data.listData.map(
          (sentense: LyricSentenceType) =>
            (sentense.listData[0].data =
              sentense.listData[0].data.charAt(0).toUpperCase() +
              sentense.listData[0].data.slice(1)),
        ),
          setLyric(data);
      })();
    }
  }, [selectedSong]);

  const onLoadSetDuration = (data: OnLoadData) => {
    setDuration(data.duration);
  };

  const onProgressSetCurrentTime = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
  };

  const onPressPlayOrPause = () => {
    setPaused(!paused);
  };

  const onPressRepeatOn = () => {
    setRepeatOn((repeatOn + 1) % 3);
  };

  const onPressShuffleOn = () => {
    setShuffleOn(!shuffleOn);
  };

  const onPressNextTrack = () => {
    if (shuffleOn) {
      setSelectedSong(Math.floor(Math.random() * playlist.length));
    } else {
      if (selectedSong === playlist.length - 1) {
        setSelectedSong(0);
      } else {
        setSelectedSong(selectedSong + 1);
      }
    }

    setCurrentTime(0);
    setPaused(false);
  };

  const onPressBackTrack = () => {
    if (shuffleOn) {
      setSelectedSong(Math.floor(Math.random() * playlist.length));
    } else {
      if (selectedSong === 0) {
        setSelectedSong(playlist.length - 1);
      } else {
        setSelectedSong(selectedSong - 1);
      }
    }

    setCurrentTime(0);
    setPaused(false);
  };

  const seekByPercent = (value: number) => {
    songRef.current?.seek(value * (duration + 1));
    beatRef.current?.seek(value * (duration + 1));
  };

  const seekBySecond = (sencond: number) => {
    songRef.current?.seek(sencond);
    beatRef.current?.seek(sencond);
  };

  return (
    <playlistContext.Provider
      value={{
        playlist,
        selectedSong,
        paused,
        shuffleOn,
        repeatOn,
        duration,
        currentTime,
        isBeat,
        lyric,
        onPressPlayOrPause,
        onPressRepeatOn,
        onPressShuffleOn,
        onPressNextTrack,
        onPressBackTrack,
        seekByPercent,
        seekBySecond,
        setPlaylist,
        setSelectedSong,
        setIsBeat,
      }}>
      {children}
      {playlist.length !== 0 ? (
        <>
          <Video
            audioOnly
            playInBackground
            playWhenInactive
            ref={songRef}
            source={{uri: playlist[selectedSong].link}}
            paused={paused}
            repeat={repeatOn === 2}
            onLoad={onLoadSetDuration}
            onProgress={onProgressSetCurrentTime}
            onEnd={repeatOn === 1 ? onPressNextTrack : undefined}
            muted={isBeat}
          />
          <Video
            audioOnly
            playInBackground
            playWhenInactive
            ref={beatRef}
            source={{uri: playlist[selectedSong].linkBeat}}
            paused={paused}
            repeat={repeatOn === 2}
            muted={!isBeat}
          />
        </>
      ) : (
        <></>
      )}
    </playlistContext.Provider>
  );
};

export const playlistContext = createContext<PlaylistContext | null>(null);
