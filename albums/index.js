// Import library to create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a component
const App = () => (
    <Text> Test Text </Text>
  );

//Render it to the device
AppRegistry.registerComponent('albums', () => App); 
