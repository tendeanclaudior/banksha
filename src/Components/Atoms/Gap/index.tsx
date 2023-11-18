import React, {FC} from 'react';
import {View} from 'react-native';

type Props = {
  width: number;
  height: number;
};

const Gap: FC<Props> = ({width, height}) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
