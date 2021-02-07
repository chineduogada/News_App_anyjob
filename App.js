import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <SearchBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 10,
    backgroundColor: "#fff",
  },
});
