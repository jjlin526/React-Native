import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// with props and the basic Text, Image, and View components, you can build a wide varity of static screens
// need state to make your app change over time

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

// using name as a prop lets us customize the Greeting component (reusable component)
const Greeting = (props) => {
  return (
    // View is a useful container for other components, to help control style and layout
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

export default LotsOfGreetings;
