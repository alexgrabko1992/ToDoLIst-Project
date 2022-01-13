import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const todos = useSelector((state) => state.todos);
  return (
    <Text>
      Number of tasks: {completedTodos.length}/{todos.length}
    </Text>
  );
};

export default TotalCompleteItems;
