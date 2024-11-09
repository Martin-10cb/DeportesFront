import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterUserScreen} from '../screens/auth/RegisterUserScreen';
import {WelcomeScreen} from '../screens/auth/WelcomeScreen';
import { LeagueListScreen } from '../screens/LeagueListScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterUserScreen: undefined;
  WelcomeScreen: undefined;
  LeagueListScreen: undefined
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
    </Stack.Navigator>
  );
};
