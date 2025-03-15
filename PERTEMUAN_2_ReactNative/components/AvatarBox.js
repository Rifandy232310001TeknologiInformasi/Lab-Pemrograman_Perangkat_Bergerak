import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const AvatarBox = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} 
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default AvatarBox;
