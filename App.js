import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { Provider } from "react-redux";
import Brand from "./components/Brand";
import News from "./components/News/News";
import SearchBar from "./components/SearchBar/SearchBar";
import store from "./redux/store";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Brand />
        <SearchBar />
        <News />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
    backgroundColor: "#fcf4ff80",
  },
});
