import React, { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import Section from "../Section";

const SearchBar = () => {
  const [value, onChangeText] = useState("");

  return (
    <Section>
      <Text style={styles.text}>Search</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Search news by title........."
      />
    </Section>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    marginBottom: 10,
  },
  textInput: {
    fontWeight: "bold",
    height: 40,
    paddingLeft: 15,
    paddingRight: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});