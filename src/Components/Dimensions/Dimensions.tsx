import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export default{
    windowHeight: windowHeight,
    windowWidth: windowWidth
}