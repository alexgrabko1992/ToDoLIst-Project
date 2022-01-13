import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Task from "./components/TaskItem";
import AddTask from "./components/AddTask";
import TotalCompleteItems from "./components/TotalCompleteItems";
import { useSelector } from "react-redux";

export default function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <View style={styles.container}>
      {/* To do list */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <TotalCompleteItems />

        <View style={styles.items}>
          {/* All task items */}
          {todos.map((todo) => {
            return (
              <TouchableOpacity>
                <Task
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Write a task */}
      <AddTask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
