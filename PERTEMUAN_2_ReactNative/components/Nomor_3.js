import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Nomor_3 = () => {
  return (
    <View style={styles.container}>
      {/* Logo Kampus */}
      <Image
        source={{ uri: 'https://your-logo-url.com/logo.png' }} // Ganti dengan URL logo asli
        style={styles.logo}
      />
      
      {/* Teks Loading dengan Inline Style */}
      <Text style={{ color: 'white', fontSize: 18, marginTop: 20 }}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Nomor_3;
