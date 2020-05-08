import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {playerTrackDetailStyles} from '../../../theme/dark';

interface TrackDetailsProps {
  title: string;
  artist: string;
}

const TrackDetails: FC<TrackDetailsProps> = (props: TrackDetailsProps) => (
  <View style={playerTrackDetailStyles.container}>
    <View style={playerTrackDetailStyles.detailsWrapper}>
      <Text style={playerTrackDetailStyles.title}>{props.title}</Text>
      <Text style={playerTrackDetailStyles.artist}>{props.artist}</Text>
    </View>
  </View>
);

export default TrackDetails;
