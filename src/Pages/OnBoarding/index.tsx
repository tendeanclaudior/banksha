import React, {FC, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {Fonts} from '../../Assets';
import {Button, Gap, Paginator} from '../../Components';
import {DummyOnBoarding} from '../../Utils';

type ItemProps = {
  title: string;
  desc: string;
  image: any;
  width: number;
  index: number;
  totalItems: number;
  onDotPress: (index: number) => void;
  data: any;
  onPress: () => void;
};

const Item: FC<ItemProps> = ({
  title,
  desc,
  image,
  width,
  index,
  onDotPress,
  data,
  onPress,
}) => (
  <View style={[styles.container, {width}]}>
    <Gap height={40} width={0} />
    <Image
      source={image}
      style={[styles.image, {width, resizeMode: 'contain'}]}
    />
    <View style={styles.boxView}>
      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={26} width={0} />
        <Text style={styles.desc}>{desc}</Text>
      </View>

      <Gap height={50} width={0} />

      <View style={styles.buttonView}>
        <Paginator
          data={data}
          onPress={onDotPress}
          width={12}
          activeIndex={index}
        />
        <View style={styles.button}>
          <Button title={'Continue'} onPress={onPress} />
        </View>
      </View>
    </View>
  </View>
);

type Props = {
  navigation: {replace: Function};
};

const OnBoarding: FC<Props> = ({navigation}) => {
  const {width} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleDotPress = (index: number) => {
    setActiveIndex(index);
    flatListRef.current?.scrollToIndex({index, animated: true});
  };

  const handleButton = () => {
    if (activeIndex < DummyOnBoarding.length - 1) {
      flatListRef.current?.scrollToIndex({index: activeIndex + 1});
    } else {
      navigation.replace('SignIn');
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        ref={flatListRef}
        data={DummyOnBoarding}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Item
            title={item.title}
            desc={item.desc}
            image={item.image}
            index={index}
            width={width}
            totalItems={DummyOnBoarding.length}
            onDotPress={handleDotPress}
            data={DummyOnBoarding}
            onPress={handleButton}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={event => {
          const currentIndex = Math.floor(
            event.nativeEvent.contentOffset.x / width,
          );
          setActiveIndex(currentIndex);
        }}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F1F1F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  image: {
    width: 230,
    height: 332,
    justifyContent: 'center',
  },
  boxView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 24,
  },
  titleView: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
  },
  desc: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[400],
    color: '#A4A8AE',
    maxWidth: 250,
    textAlign: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 150,
  },
});
