import React, {FC} from 'react';
import {Modal as Modals, StyleSheet, Text, View} from 'react-native';
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
  visible: any;
  onRequestClose: () => void;
  onPress: () => void;
};

const Modal: FC<Props> = ({visible, onRequestClose, onPress}) => {
  return (
    <View>
      <Modals
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={styles.container}>
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
        </View>
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
