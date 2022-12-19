import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { IStackScreenProps } from '../library/StackScreenProps';

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route, nameProp} = props;

  console.log({navigation, route, nameProp})

  return (
    <View style={styles.container}>
      <Text>Home</Text>
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

export default HomeScreen;