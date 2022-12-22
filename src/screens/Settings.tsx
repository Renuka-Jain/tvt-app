import Recat from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
          <Text>Settings screen!</Text>
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

export default SettingsScreen