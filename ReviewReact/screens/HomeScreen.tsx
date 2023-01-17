import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { Resturant } from '../features/resturants/models/resturant';
import ResutrantThumbnail from '../features/resturants/components/ResturantThumbnail';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RootStackParams } from '../App';

// Use props defined in app component
type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Resturants'>;

export default function HomeScreen({ route }: HomeScreenProps) {
  // useNavigation hook exposes navigation methods
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  // Deconstruct route param to get access to props
  const { resturants } = route.params;

  /**
   * Navigates to a resturant screen
   *
   * @param resturant the resturant to be displayed in the screen
   */
  const navigateTo = (resturant: Resturant) => {
    navigation.navigate('Details', { resturant: resturant });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Resturants</Text> */}
      {resturants.map((resturant) => {
        return (
          <TouchableOpacity
            key={resturant.id}
            onPress={() => navigateTo(resturant)}
          >
            <ResutrantThumbnail resturant={resturant} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
