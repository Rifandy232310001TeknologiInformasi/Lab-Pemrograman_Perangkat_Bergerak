import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/cf/8a/61/cf8a61e3acfd3811892b36d5bf193cc7.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Rifandy Arnas</Text>
      <Text style={styles.bio}>Mahasiswa Teknologi Informasi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: 'gray',
  },
});
