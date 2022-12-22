import Recat from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailsScreen = () => {
    return (
        <View style={styles.container}>
          <Text>Detail screen!</Text>
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

export default DetailsScreen