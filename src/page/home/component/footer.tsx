import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {homeFooterStyles} from '../../../theme/dark';

const coverPrefix = 'https://photo-resize-zmp3.zadn.vn/w96_r1x1_jpeg/';

interface FooterProps {
  title: string;
  url: string;
  paused: boolean;
  onPressPlayOrPause: () => void;
  onPressNextTrack: () => void;
  onPressBackTrack: () => void;
  onPressTitle: () => void;
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <View style={homeFooterStyles.container}>
      <TouchableOpacity
        style={homeFooterStyles.item}
        onPress={props.onPressTitle}>
        <Image
          style={homeFooterStyles.image}
          source={{uri: `${coverPrefix}${props.url}`}}
        />
        <View>
          <Text style={homeFooterStyles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>

      <Icon.Button
        name="skip-previous"
        size={35}
        color="#fff"
        backgroundColor="#000"
        onPress={props.onPressBackTrack}
      />

      <Icon.Button
        name={props.paused ? 'play' : 'pause'}
        size={35}
        color="#fff"
        backgroundColor="#000"
        onPress={props.onPressPlayOrPause}
      />

      <Icon.Button
        name="skip-next"
        size={35}
        color="#fff"
        backgroundColor="#000"
        onPress={props.onPressNextTrack}
      />
    </View>
  );
};

export default Footer;
