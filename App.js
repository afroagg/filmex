import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './Header';
import CategoryRow from './CategoryRow';
import { categories } from './movies';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Header />}
        renderItem={({ item }) => <CategoryRow category={item} />}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
});
