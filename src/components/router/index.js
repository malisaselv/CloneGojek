import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Orders, Home, Inbox, GoRide} from '../../pages';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    GoRide: {
      screen: GoRide,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const InboxStack = createStackNavigator(
  {
    Inbox: {
      screen: Inbox,
    },
    GoRideFromInbox: {
      screen: GoRide,
    },
  },
  {
    initialRouteName: 'Inbox',
    headerMode: 'none',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    Orders: {
      screen: Orders,
    },
    InboxStack,
  },
  {headerMode: 'none'},
);

export default createAppContainer(Router);
