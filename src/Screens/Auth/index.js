import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from '../DrawerNavigation';
import AuthNavigator from './AuthNavigator';
import Login from '../AuthScreens/Login';
import Addkart from '../DashboardTab/Dashboard/Addkart';
import Sign from '../AuthScreens/Sign';
const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        /> 
          <Stack.Screen
          name="Sign"
          component={Sign}
          options={{headerShown: false}}
        /> 
           <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        /> 
          <Stack.Screen
          name="Addkart"
          component={Addkart}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
