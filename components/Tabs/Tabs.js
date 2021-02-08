import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export default function Tabs({ data }) {
  return (
    <View>
      <ScrollView style={styles.container} horizontal>
        {data.map((item, index) => (
          <View style={styles.tab} key={index}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    marginBottom: 5,
  },
  tab: {
    padding: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text: {
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "bold",
    color: "#46165a",
  },
});
