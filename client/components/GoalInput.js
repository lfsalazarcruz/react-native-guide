import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
  const [inputText, setInputText] = useState("");

  const inputHandler = inputText => {
    setInputText(inputText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(inputText);
    setInputText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your goal..."
          style={styles.input}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="ADD" onPress={addGoalHandler} color="green" />
          <Button title="CANCEL" onPress={props.onCancelGoal} color="red" />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    flex: 1
  },
  input: {
    marginBottom: 10,
    borderColor: "dimgray",
    borderWidth: 1,
    padding: 10,
    width: "90%"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%"
  }
});
