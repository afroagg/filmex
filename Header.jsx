import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>FILMEX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#141414',
  },
  logo: {
    color: '#E63946',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
