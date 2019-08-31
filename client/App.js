import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = inputText => {
    setInputText(inputText);
  };

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, inputText]);
    console.log("Goals: ", goals);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your goal..."
          style={styles.input}
          onChangeText={inputHandler}
        />
        <Button
          title="add"
          onPress={() => addGoalHandler(inputText)}
          styles={styles.button}
        />
      </View>
      {goals.map(goal => (
        <View style={styles.goal}>
          <Text>{goal}</Text>
        </View>
      ))}
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
  },
  goal: {
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: "#ccc",
    padding: 10
  }
});
