import Recat from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Favourites = () => {
    return (
        <View style={styles.container}>
          <Text>Favourites screen!</Text>
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

export default Favourites