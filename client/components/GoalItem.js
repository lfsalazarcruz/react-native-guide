import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goal}>
        <Text>{props.goal}</Text>
      </View>
    </TouchableOpacity>
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
