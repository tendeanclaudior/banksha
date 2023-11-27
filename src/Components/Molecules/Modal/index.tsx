import React, {FC, useEffect, useRef} from 'react';
import {
  Animated,
  Modal as Modals,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Fonts,
  IconData,
  IconFood,
  IconMovie,
  IconStream,
  IconTravel,
  IconWater,
} from '../../../Assets';
import ModalContent from '../ModalContent';

type Props = {
  visible?: boolean;
  onRequestClose: () => void;
  onPress: () => void;
  screen: () => void;
};

const Modal: FC<Props> = ({visible, onRequestClose, onPress, screen}) => {
  const animeBackDrop = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(animeBackDrop, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animeBackDrop, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <View>
      <Modals
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.container}
          onPress={screen}>
          <View style={styles.content}>
            <View style={styles.contentView}>
              <Text style={styles.title}>Do More With Us</Text>
              <View style={styles.modalView}>
                <ModalContent
                  icon={IconData}
                  title={'Data'}
                  onPress={onPress}
                />
                <ModalContent icon={IconWater} title={'Watter'} />
                <ModalContent icon={IconStream} title={'Stream'} />
                <ModalContent icon={IconMovie} title={'Movie'} />
                <ModalContent icon={IconFood} title={'Food'} />
                <ModalContent icon={IconTravel} title={'Travel'} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modals>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(20, 25, 63, 0.8)',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  contentView: {
    backgroundColor: '#F6F8FB',
    borderRadius: 40,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
    marginBottom: 13,
  },
  modalView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
