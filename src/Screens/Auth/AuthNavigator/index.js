import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../AuthScreens/Login';
import Addkart from '../../DashboardTab/Dashboard/Addkart';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />  */}

      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
