import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.goal}>
      <Text>{props.goal}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: "#ccc",
    padding: 10
  }
});
