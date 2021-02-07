import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../redux";
import Section from "../Section";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleQueryChange = (text) => setQuery(text);

  const handleQuerySearch = () => {
    dispatch(fetchNews({ query }));
  };

  return (
    <Section heading="search">
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.textInput}
            onChangeText={handleQueryChange}
            value={query}
            placeholder="Search by Title, Description, or Content....."
          />

          <TouchableOpacity onPress={handleQuerySearch} style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Section>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  button: {
    // alignSelf: "center",
    borderRadius: 50,
    backgroundColor: "purple",
    color: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 80,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  formGroup: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 3,
    // paddingRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    marginBottom: 10,
  },
  textInput: {
    paddingRight: 15,
    flex: 1,
    fontWeight: "bold",
    height: 40,
  },
});
