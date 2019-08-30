import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Type your goal..." style={styles.input} />
        <Button title="add" styles={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    flex: 1,
    borderColor: "dimgray",
    borderWidth: 1,
    padding: 10
  },
  button: {
    flex: 1,
    marginLeft: 50
  }
});
