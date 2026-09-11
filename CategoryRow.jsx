import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MovieCard from './MovieCard';

export default function CategoryRow({ category }) {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{category.title}</Text>

      <FlatList
        data={category.movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 10,
  },
  list: {
    paddingLeft: 16,
  },
});
