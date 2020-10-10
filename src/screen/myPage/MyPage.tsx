import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MyPage: FunctionComponent<Props> = () => {
  return (
    <View>
      <Text>My Page</Text>
    </View>
  );
};

export default MyPage;
