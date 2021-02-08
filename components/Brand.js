import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Brand({ children, heading, ...rest }) {
  return (
    <Text style={styles.text} {...rest}>
      my news app
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textTransform: "uppercase",
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
    marginBottom: 10,
    textAlign: "center",
    color: "#46165a",
  },
});
