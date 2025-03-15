import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Nomor_1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>History of Bicycle</Text>
        <Text style={styles.content}>
          A bicycle, also called <Text style={{ color: 'red' }}>a pedal cycle</Text>, <Text style={{ fontWeight: 'bold' }}>bike</Text>,
          <Text style={{ fontStyle: 'italic' }}> push-bike</Text> or <Text style={{ textDecorationLine: 'underline' }}>cycle</Text>, is a 
          human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a 
          frame, one behind the other. A bicycle rider is called a cyclist or bicyclist.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} 
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'brown',
    padding: 5,
    textAlign: 'center',
  },
  content: {
    fontSize: 14,
    textAlign: 'justify',
    marginTop: 5,
  },
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

export default Nomor_1;
