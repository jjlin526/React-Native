import React from 'react'; // to use JSX (which is then transformed into native components of each platform
import { Text, View } from 'react-native';

const HelloWorldApp = () => { // define functional component
  return (
    // render a container
    <View 
      style={{
        flex: 1, // take all available space of parent component
        justifyContent: "center", // align children of container along center of container's main axis
        alignItems: "center" // align children of container in the center of the container's cross axis
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default HelloWorldApp;

// import, export, const and from are all ES2015 (ES6) features

// JSX lets you write markup language inside code
