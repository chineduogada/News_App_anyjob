import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import News from "./components/News/News";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <News />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
});
