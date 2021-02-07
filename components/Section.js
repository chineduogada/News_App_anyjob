import React from "react";
import { View, StyleSheet } from "react-native";

export default function Section({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});
