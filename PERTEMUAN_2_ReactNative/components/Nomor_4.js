import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import BioInfo from './components/BioInfo';

class Nomor_4 extends Component {
  state = {
    MyBio: {
      identity: {
        npm: "212310056",
        firstname: "MUHAMMAD",
        middlename: "ZIDAN",
        lastname: "AKBAR",
      },
      educations: [
        { id: 1, school: "SDN 1 Kota Bogor" },
        { id: 2, school: "SMPN 1 Kota Bogor" },
        { id: 3, school: "SMAN 1 Kota Bogor" },
      ],
      mobile_phone: "0812345679",
      email: "212310056@student.ibik.ac.id",
      gender: "M",
      tall_body: 175,
      weight_body: 64.5,
    }
  };

  render() {
    return (
      <ScrollView>
        <View>
          <BioInfo bio={this.state.MyBio} />
        </View>
      </ScrollView>
    );
  }
}

export default Nomor_4;
