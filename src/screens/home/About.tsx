import { StatusBar } from 'expo-status-bar';
import Recat from 'react'
import { View, Text, StyleSheet } from 'react-native'

const About = () => {

  return (
    <View style={styles.container}>
      <Text>About Us</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default About;