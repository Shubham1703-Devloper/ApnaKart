import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoardNavigator from '../DashBoardNavigator';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
      <Stack.Navigator>
         <Stack.Screen
          name="DashBoardNavigator"
          component={DashBoardNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};

export default AuthNavigator;
