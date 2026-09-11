import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MovieCard({ movie }) {
  return (
    <View style={styles.card}>
      <Image source={movie.image} style={styles.poster} />
      <Text style={styles.title} numberOfLines={1}>
        {movie.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 12,
  },
  poster: {
    width: 120,
    height: 170,
    borderRadius: 8,
    backgroundColor: '#2a2a2a',
  },
  title: {
    color: '#e5e5e5',
    fontSize: 13,
    marginTop: 6,
  },
});
