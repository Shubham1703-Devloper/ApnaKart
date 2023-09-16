import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DashBoard from '../DashboardTab/Dashboard';
// import DashBoard from '../DashboardTab/Dashboard';

const Tab = createMaterialTopTabNavigator();

const Toptabnavigator=()=> {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="All" component={DashBoard} />
      <Tab.Screen name="Settings" component={DashBoard} />
      <Tab.Screen name="MyWallet" component={DashBoard} />
    </Tab.Navigator>
  );
}

export default Toptabnavigator;