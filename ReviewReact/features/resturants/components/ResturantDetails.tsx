import React from 'react';
import { Resturant } from '../models/resturant';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';

// Use props defined in app component
type ResturantDetailsProps = NativeStackScreenProps<RootStackParams, 'Details'>;

export default function ResturantDetails({ route }: ResturantDetailsProps) {
  // Deconstruct route param to get access to props
  const { resturant } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resturant.name}</Text>
      <View style={[styles.reviews, styles.card, styles.w100]}>
        <Text>Reviews: 104</Text>
        <Text>Rating: {resturant.rating}</Text>
      </View>
      <View style={[styles.card, styles.w100, styles.mb20]}>
        <Text style={styles.label}>About: </Text>
        <Text>{resturant.desc}...</Text>
      </View>
      <View style={[styles.w100, styles.mb20]}>
        <View style={[styles.card, styles.mb10]}>
          <Text style={styles.label}>Address:</Text>
          <Text>{resturant.address}</Text>
        </View>
        <View style={[styles.card, styles.mb10]}>
          <Text style={styles.label}>Phone:</Text>
          <Text>{resturant.phonenumber}</Text>
        </View>
        <View style={[styles.card, styles.mb10]}>
          <Text style={styles.label}>Email:</Text>
          <Text>{resturant.email}</Text>
        </View>
      </View>
      <Text style={styles.titleSmall}>Reviews:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  w100: {
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  titleSmall: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  reviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    color: '#777',
  },
});
