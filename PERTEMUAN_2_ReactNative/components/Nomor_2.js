import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HistoryText from './HistoryText';
import AvatarBox from './AvatarBox';

class Nomor_2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HistoryText />
        <AvatarBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Nomor_2;
