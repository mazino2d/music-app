import React, {createContext, FC, useState} from 'react';

interface AuthContext {
  errorCode: number;
  errorMessage: string;
  accessToken: string;
  refreshToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
  setErrorCode: React.Dispatch<React.SetStateAction<number>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthProvider: FC = ({children}) => {
  const [errorCode, setErrorCode] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  return (
    <authContext.Provider
      value={{
        errorCode,
        errorMessage,
        accessToken,
        refreshToken,
        setAccessToken,
        setRefreshToken,
        setErrorCode,
        setErrorMessage,
      }}>
      {children}
    </authContext.Provider>
  );
};

export const authContext = createContext<AuthContext | null>(null);
