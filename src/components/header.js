//Import libraries for making a component
import React from "react";
import { Text, View } from "react-native";

//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    
    //style={textStyle} is referred to as a prop
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//Styling for each component gets added to the component file, not a separate file
const styles = {
    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        elevation: 2,
        position: "relative"
    },
    textStyle: {
        fontSize: 20
    }
};

//Make the component available to all parts of the app
export default Header;
