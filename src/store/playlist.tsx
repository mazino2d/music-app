import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import SongApi, {
  InfoMediaType,
  LyricSentenceType,
  LyricType,
} from '../service/song';

interface PlaylistContext {
  playlist: InfoMediaType[];
  selectedSong: number;
  paused: boolean;
  shuffleOn: boolean;
  repeatOn: boolean;
  duration: number;
  currentTime: number;
  videoRef: React.RefObject<Video>;
  lyric?: LyricType;
  onPressPlayOrPause: () => void;
  onPressRepeatOn: () => void;
  onPressShuffleOn: () => void;
  onPressNextTrack: () => void;
  onPressBackTrack: () => void;
  onPressSeek: (value: number) => void;
  setPlaylist: React.Dispatch<React.SetStateAction<InfoMediaType[]>>;
  setSelectedSong: React.Dispatch<React.SetStateAction<number>>;
}

export const PlaylistProvider: FunctionComponent = ({children}) => {
  const videoRef = useRef<Video>(null);
  const initialState: InfoMediaType[] = [];

  const [playlist, setPlaylist] = useState(initialState);
  const [selectedSong, setSelectedSong] = useState(0);
  const [paused, setPaused] = useState(true);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
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
    setDuration(Math.floor(data.duration));
  };

  const onProgressSetCurrentTime = (data: OnProgressData) => {
    setCurrentTime(Math.floor(data.currentTime));
  };

  const onPressPlayOrPause = () => {
    setPaused(!paused);
  };

  const onPressRepeatOn = () => {
    setRepeatOn(!repeatOn);
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

  const onPressSeek = (value: number) => {
    videoRef.current?.seek(value * (duration + 1));
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
        videoRef,
        lyric,
        onPressPlayOrPause,
        onPressRepeatOn,
        onPressShuffleOn,
        onPressNextTrack,
        onPressBackTrack,
        onPressSeek,
        setPlaylist,
        setSelectedSong,
      }}>
      {children}
      {playlist.length !== 0 ? (
        <Video
          audioOnly
          playInBackground
          playWhenInactive
          ref={videoRef}
          source={{uri: playlist[selectedSong].link}}
          paused={paused}
          repeat={repeatOn}
          onLoad={onLoadSetDuration}
          onProgress={onProgressSetCurrentTime}
          // onEnd={}
        />
      ) : (
        <></>
      )}
    </playlistContext.Provider>
  );
};

export const playlistContext = createContext<PlaylistContext | null>(null);
