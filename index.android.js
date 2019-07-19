import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

class HelloUser extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.hello}>test 1</Text>
      <Button style={styles.hello}
             onPress={() => NativeModules.ActivityStarter.navigateToExample()}
             title='Start example activity'
         />
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('YourAndroidApp', () => HelloUser);
