import Recat from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Signup = () => {
    return (
        <View style={styles.container}>
          <Text>Signup screen!</Text>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default Signup