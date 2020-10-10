import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {
  ActiveIoniconsIcons,
  ActiveMaterialCommunityIcons,
} from '../src/components/activeRnIcons/activeRnIcons';
import cStyles from '../cStyles';
import {View, Text} from 'react-native';
import Home from '../src/screen/home/Home';
import MyPage from '../src/screen/myPage/MyPage';

const screens = {
  Home: {
    screen: createStackNavigator({
      Home: {
        screen: Home,
        navigationOptions: {
          headerShown: false,
        },
      },
    }),
    navigationOptions: {
      tabBarIcon: ({focused}) => (
        <ActiveIoniconsIcons
          active={focused}
          activeName={'home'}
          activeColor={cStyles.TabActiveColor}
          deactiveColor={cStyles.TabDeactiveColor}
          size={25}
          deactiveName={'home-outline'}
        />
      ),
      tabBarLabel: ({focused}) => (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 10,
              color: focused
                ? cStyles.TabActiveColor
                : cStyles.TabDeactiveColor,
              fontWeight: '700',
              paddingBottom: 5,
            }}>
            홈
          </Text>
        </View>
      ),
    },
  },
  MyPage: {
    screen: createStackNavigator({
      MyPage: {
        screen: MyPage,
        navigationOptions: {
          headerShown: false,
        },
      },
    }),
    navigationOptions: {
      tabBarIcon: ({focused}) => (
        <ActiveIoniconsIcons
          active={focused}
          activeName={'person'}
          activeColor={cStyles.TabActiveColor}
          deactiveColor={cStyles.TabDeactiveColor}
          size={25}
          deactiveName={'person-outline'}
        />
      ),
      tabBarLabel: ({focused}) => (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 10,
              color: focused
                ? cStyles.TabActiveColor
                : cStyles.TabDeactiveColor,
              fontWeight: '700',
              paddingBottom: 5,
            }}>
            마이 페이지
          </Text>
        </View>
      ),
    },
  },
};

const config = {
  initialRouteName: 'Home',
  tabBarOptions: {
    style: {
      height: 60,
    },
    labelStyle: {
      fontSize: 15,
    },
    showLabel: true,
  },
  // defaultNavigationOptions: {
  //   tabBarOnPress: (data) => {
  //     // this is where the magic happens
  //     const {navigation, defaultHandler} = data;
  //     // we check to see if the navigation key is going to be on Tab3
  //     if (navigation.state.key === 'MyPage') {
  //       navigation.navigate('MyPage');
  //       // if it is we show the ModalScreen by navigating to it
  //     } else {
  //       // otherwise we call the defaultHandler and navigate to the tab we pressed
  //       defaultHandler(navigation.state.key);
  //     }
  //   },
  // },
};

export default createBottomTabNavigator(screens, config);
