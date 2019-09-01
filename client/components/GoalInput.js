import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = props => {
  const [inputText, setInputText] = useState("");

  const inputHandler = inputText => {
    setInputText(inputText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Type your goal..."
        style={styles.input}
        onChangeText={inputHandler}
      />
      <Button
        title="add"
        onPress={props.onAddGoal.bind(this, inputText)}
        styles={styles.button}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
