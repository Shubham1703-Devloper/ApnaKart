import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const DashBoardNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
         {/* <Stack.Screen
          name="Addkart"
          component={Addkart}
          options={{headerShown: false}}
        />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DashBoardNavigator;
