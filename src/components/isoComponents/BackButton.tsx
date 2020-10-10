import React from 'react';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import constant from '../../../constant';
import {IoniconsIcons} from '../icons/RnIcons';

const BackButton = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          height: 50,
          width: constant.width,
          alignItems: 'center',
          backgroundColor: 'white',
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <IoniconsIcons
          name={'chevron-back-outline'}
          color={'black'}
          size={20}
        />
        <Text style={{fontWeight: '700'}}>뒤로가기</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BackButton;
