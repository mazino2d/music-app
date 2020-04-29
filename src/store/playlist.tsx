import React, {createContext, FunctionComponent, useState} from 'react';
import {InfoMediaType} from '../service/song';

interface PlaylistContext {
  playlist: InfoMediaType[];
  setPlaylist: React.Dispatch<React.SetStateAction<InfoMediaType[]>>;
  selectedSong: number;
  setSelectedSong: React.Dispatch<React.SetStateAction<number>>;
}

export const PlaylistProvider: FunctionComponent = ({children}) => {
  const initialState: InfoMediaType[] = [];

  const [playlist, setPlaylist] = useState(initialState);
  const [selectedSong, setSelectedSong] = useState(0);

  return (
    <playlistContext.Provider
      value={{
        playlist,
        setPlaylist,
        selectedSong,
        setSelectedSong,
      }}>
      {children}
    </playlistContext.Provider>
  );
};

export const playlistContext = createContext<PlaylistContext | null>(null);
