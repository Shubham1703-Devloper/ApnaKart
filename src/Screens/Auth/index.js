import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigator from './AuthNavigator';
import Login from '../AuthScreens/Login';
import Addkart from '../DashboardTab/Dashboard/Addkart';
import Sign from '../AuthScreens/Sign';
import DashBoardNavigator from './DashBoardNavigator';
import ProductInfo from '../DashboardTab/Dashboard/ProductInfo';
import Account from '../DashboardTab/Account/Account';
const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
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
          <Stack.Screen
          name="DashBoardNavigator"
          component={DashBoardNavigator}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfo}
          options={{headerShown: true}}
        />
         <Stack.Screen
          name="Account"
          component={Account}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
  );
};

export default Auth;
