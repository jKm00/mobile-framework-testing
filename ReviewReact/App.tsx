import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ResturantDetails from './features/resturants/components/ResturantDetails';
import { Resturant } from './features/resturants/models/resturant';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Defines every screen in the application
// With complex application, screens should be split into multiple stacks
export type RootStackParams = {
  Resturants: {
    resturants: Resturant[];
  };
  Details: {
    resturant: Resturant;
  };
};

// Create a stack that keeps track of screens
const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  // Dummy data
  const resturants: Resturant[] = [
    {
      id: 1,
      name: 'Burger King',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis, arcu ut volutpat finibus, purus nisi congue turpis, eu pulvinar est ipsum non urna.',
      rating: 4,
      address: 'soleveien 2',
      phonenumber: '904 56 231',
      email: 'burger@king.com',
    },
    {
      id: 2,
      name: 'Anno',
      desc: 'High quality steaks and pizza with bar',
      rating: 5,
      address: 'Apotekergata 9B',
      phonenumber: '453 34 532',
      email: 'anno@bar.com',
    },
    {
      id: 3,
      name: 'Dampsentralen',
      desc: 'Food made on steam',
      rating: 2.5,
      address: 'Wilhelms gate 22',
      phonenumber: '405 67 892',
      email: 'damp@sentralen.com',
    },
  ];

  // Returns a navigation stack
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Resturants">
        <RootStack.Screen
          name="Resturants"
          component={HomeScreen}
          initialParams={{ resturants: resturants }}
        />
        <RootStack.Screen name="Details" component={ResturantDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#e9e9e9',
    minHeight: '100%',
  },
});
