import {Dimensions, StyleSheet} from 'react-native';

// Navigation
export const navigationStyles = StyleSheet.create({
  header: {
    color: '#000',
    backgroundColor: '#D8D8D8',
  },
});

// Login Page
export const loginPageStyles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 0,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.8)',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
  },
});

// Home Page
export const homePageStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  itemList: {
    marginBottom: 50,
  },
});
export const homeItemListStyles = StyleSheet.create({
  item: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: 64,
    height: 64,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  artist: {
    color: '#000',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
  },
});
export const homeFooterStyles = StyleSheet.create({
  container: {
    backgroundColor: '#D8D8D8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  item: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  button: {
    color: '#000',
    backgroundColor: '#D8D8D8',
  },
});

// Lyric Page
export const lyricPageStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
export const lyricWordStyles = StyleSheet.create({
  low: {
    color: 'rgba(0, 0, 0, 1.0)',
  },
  mid: {
    color: 'rgba(0, 100, 255, 1.0)',
  },
  high: {
    color: 'rgba(255, 0, 0, 1.0)',
    fontWeight: 'bold',
  },
});
export const lyricSentenceStyles = StyleSheet.create({
  sentense: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 10,
  },
});

// Player Page
export const playerPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const playerHeaderStyles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    color: '#000',
    backgroundColor: '#fff',
  },
});
const windowSize = Dimensions.get('window');
const imageSize = windowSize.width - 48;
export const playerAlbumArtStyles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
});
export const playerTrackDetailStyles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  artist: {
    color: 'rgba(0, 0, 0, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
});
export const playerSeekBarStyles = StyleSheet.create({
  slider: {
    marginTop: 12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.72)',
    fontSize: 12,
    textAlign: 'center',
  },
  seek: {
    borderStartColor: '#000',
    borderEndColor: '#001',
    color: '#000',
  },
});
export const playerControlsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    color: '#000',
    backgroundColor: '#fff',
  },
});
