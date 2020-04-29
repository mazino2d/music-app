import React, {createContext, FunctionComponent, useState} from 'react';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import {InfoMediaType} from '../service/song';

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
}

export const PlaylistProvider: FunctionComponent = ({children}) => {
  const initialState: InfoMediaType[] = [];

  const [playlist, setPlaylist] = useState(initialState);
  const [selectedSong, setSelectedSong] = useState(0);
  const [paused, setPaused] = useState(true);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onLoadSetDuration = (data: OnLoadData) => {
    setDuration(Math.floor(data.duration));
  };

  const onProgressSetCurrentTime = (data: OnProgressData) => {
    setCurrentTime(Math.floor(data.currentTime));
  };

  const song = playlist[selectedSong];

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
      }}>
      {children}
      {playlist.length !== 0 ? (
        <Video
          source={{uri: song.link}}
          paused={paused}
          repeat={repeatOn}
          currentTime={currentTime}
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
