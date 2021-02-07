import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Section({ children, heading, ...rest }) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.text}>{heading}</Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    marginBottom: 10,
    color: "#46165a",
  },
});
