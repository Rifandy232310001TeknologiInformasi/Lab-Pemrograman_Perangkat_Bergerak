import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryText = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>History of Bicycle</Text>
      <Text style={styles.content}>
        A bicycle, also called <Text style={{ color: 'red' }}>a pedal cycle</Text>, <Text style={{ fontWeight: 'bold' }}>bike</Text>,
        <Text style={{ fontStyle: 'italic' }}> push-bike</Text> or <Text style={{ textDecorationLine: 'underline' }}>cycle</Text>, is a 
        human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a 
        frame, one behind the other. A bicycle rider is called a cyclist or bicyclist.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default HistoryText;
