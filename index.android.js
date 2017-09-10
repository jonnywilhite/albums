//Import a library to create a component
import React from "react";
//Text and AppRegistry belong to the ReactNative library, but we only need those parts
//So we only import those things to avoid having to import the entire library
import { Text, AppRegistry } from "react-native";

//Create a Component
//fat arrow functions without curly braces is a shortcut to just return the thing inside
const App = () => (
    <Text>Some Text</Text>
);

//Render it to the device
//Tells React to render an application called albums, passing in a function that returns the first component to render
AppRegistry.registerComponent("albums", () => App);
