import Recat from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Settings = () => {
    return (
        <View style={styles.container}>
          <Text>Settings screen!</Text>
          <Button title="Switch to Dark Mode" onPress={() => null} />
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

export default Settings