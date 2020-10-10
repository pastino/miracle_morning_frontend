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

const Home: FunctionComponent<Props> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
