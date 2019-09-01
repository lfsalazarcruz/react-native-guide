import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [
      ...currentGoals,
      // Now the goals array will be an array of objects
      { id: Math.random().toString(), text: goalTitle }
    ]);
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => <GoalItem goal={itemData.item.text} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 20
  }
});
