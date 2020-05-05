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
  setPlaylist: React.Dispatch<React.SetStateAction<InfoMediaType[]>>;
  selectedSong: number;
  setSelectedSong: React.Dispatch<React.SetStateAction<number>>;
  paused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  shuffleOn: boolean;
  setShuffleOn: React.Dispatch<React.SetStateAction<boolean>>;
  repeatOn: boolean;
  setRepeatOn: React.Dispatch<React.SetStateAction<boolean>>;
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  videoRef: React.RefObject<Video>;
  lyric?: LyricType;
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

  return (
    <playlistContext.Provider
      value={{
        playlist,
        setPlaylist,
        selectedSong,
        setSelectedSong,
        paused,
        setPaused,
        shuffleOn,
        setShuffleOn,
        repeatOn,
        setRepeatOn,
        duration,
        setDuration,
        currentTime,
        setCurrentTime,
        videoRef,
        lyric,
      }}>
      {children}
      {playlist.length !== 0 ? (
        <Video
          audioOnly
          ref={videoRef}
          source={{uri: playlist[selectedSong].link}}
          paused={paused}
          repeat={repeatOn}
          onLoad={onLoadSetDuration}
          onProgress={onProgressSetCurrentTime}
        />
      ) : (
        <></>
      )}
    </playlistContext.Provider>
  );
};

export const playlistContext = createContext<PlaylistContext | null>(null);
