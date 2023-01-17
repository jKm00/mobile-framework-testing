import React from 'react';
import { Resturant } from '../models/resturant';
import { View, Text, StyleSheet } from 'react-native';

export type ResutrantThumbnailProps = {
  resturant: Resturant;
};

export default function ResutrantThumbnail({
  resturant,
}: ResutrantThumbnailProps) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{resturant.name}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.text}>Rating: {resturant.rating}</Text>
        <Text style={styles.text}>{resturant.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#777',
  },
});
