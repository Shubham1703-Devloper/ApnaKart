import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Addkart from '../../DashboardTab/Dashboard/Addkart';
import DashBoard from '../../DashboardTab/Dashboard';
import ProductInfo from '../../DashboardTab/Dashboard/ProductInfo';
const Stack = createNativeStackNavigator();
const DashBoardNavigator = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Addkart"
          component={Addkart}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
  );
};

export default DashBoardNavigator;
