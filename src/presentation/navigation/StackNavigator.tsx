import {createStackNavigator} from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterUserScreen} from '../screens/auth/RegisterUserScreen';
import {WelcomeScreen} from '../screens/auth/WelcomeScreen';
import { LeagueListScreen } from '../screens/LeagueListScreen';
import { MatchListScreen } from '../screens/MatchListScreen';
import { MatchDetailsScreen } from '../screens/MatchDetailsScreen';
import { MenuScreen } from '../screens/MenuScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterUserScreen: undefined;
  WelcomeScreen: undefined;
  LeagueListScreen: undefined,
  MatchListScreen: { leagueId: string }
  MatchDetailsScreen: { 
    leftTeamLogo: ImageSourcePropType,
    rightTeamLogo: ImageSourcePropType 
  },
  MenuScreen: undefined
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LeagueListScreen" component={LeagueListScreen} />
      <Stack.Screen name="MatchListScreen" component={MatchListScreen} />
      <Stack.Screen name="MatchDetailsScreen" component={MatchDetailsScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
    </Stack.Navigator>
  );
};
