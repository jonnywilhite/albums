//Import a library to create a component
import React from "react";
//Text and AppRegistry belong to the ReactNative library, but we only need those parts
//So we only import those things to avoid having to import the entire library
import { AppRegistry } from "react-native";
import Header from "./src/components/header";

//Create a Component
//fat arrow functions without curly braces is a shortcut to just return the thing inside
const App = () => (
    //A tag with nothing inside can be made self-closing
    <Header />
);

//Render it to the device
//Tells React to render an application called albums, passing in a function that returns the first component to render
AppRegistry.registerComponent("albums", () => App);
