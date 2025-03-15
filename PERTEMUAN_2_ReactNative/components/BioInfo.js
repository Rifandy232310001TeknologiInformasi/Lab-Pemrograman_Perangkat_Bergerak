import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const BioInfo = ({ bio }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biodata</Text>
      <Text>NPM: {bio.identity.npm}</Text>
      <Text>Nama: {bio.identity.firstname} {bio.identity.middlename} {bio.identity.lastname}</Text>
      <Text>Email: {bio.email}</Text>
      <Text>Jenis Kelamin: {bio.gender}</Text>
      <Text>Tinggi Badan: {bio.tall_body} cm</Text>
      <Text>Berat Badan: {bio.weight_body} kg</Text>
      
      <Text style={styles.subtitle}>Pendidikan:</Text>
      {bio.educations.map((edu) => (
        <Text key={edu.id}>- {edu.school}</Text>
      ))}
    </View>
  );
};

BioInfo.propTypes = {
  bio: PropTypes.shape({
    identity: PropTypes.shape({
      npm: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      middlename: PropTypes.string,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    tall_body: PropTypes.number.isRequired,
    weight_body: PropTypes.number.isRequired,
    educations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        school: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 }
});

export default BioInfo;