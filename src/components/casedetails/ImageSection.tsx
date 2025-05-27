import {Image, StyleSheet, View} from 'react-native';
import {pentiaHouseBackground} from '../../styling/GlobalStyles.tsx';
import ActionButton from '../buttons/ActionButton.tsx';
import React from 'react';

interface ImageSectionProps {
  imageUrl?: string,
  onChatPress: () => void,
}
const ImageSection: React.FC<ImageSectionProps> = ({imageUrl, onChatPress}) => (
  <View style={styles.imageBackgroundContainer}>
    <Image
      source={imageUrl ? { uri: imageUrl } : pentiaHouseBackground}
      style={styles.backgroundImage}
      resizeMode="cover"
    />
    <View style={styles.overlay}>
      <ActionButton backgroundColor="#ff008b" onPress={onChatPress} title={'Chat'}
                    textColor="#ffffff" height={48} width={220} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 18,
    marginBottom: 18,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 18,
    width: '100%',
  },
});

export default ImageSection;
