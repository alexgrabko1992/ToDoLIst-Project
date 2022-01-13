import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Task from "./components/TaskItem";
import AddTask from "./components/AddTask";
import TotalCompleteItems from "./components/TotalCompleteItems";
import { useSelector } from "react-redux";
import { RadioButton } from "react-native-paper";

export default function App() {
  const todos = useSelector((state) => state.todos);
  const [checked, setChecked] = useState("all");
  const [filtered, setFilter] = useState(todos);

  useEffect(() => {
    setFilter(todos);
    taskFilter(checked);
  }, [todos]);

  function taskFilter(checked) {
    setChecked(checked);
    if (checked === "all") {
      setFilter(todos);
    } else if (checked === "completed") {
      let newTodo = [...todos].filter((item) => item.completed === true);
      setFilter(newTodo);
    } else if (checked === "unfinished") {
      let newTodo = [...todos].filter((item) => item.completed === false);
      setFilter(newTodo);
    }
  }

  return (
    <View style={styles.container}>
      {/* To do list */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        {/* Complete items from all items */}
        <TotalCompleteItems />
        {/* Filter buttons for all/completed/deleted tasks */}
        <RadioButton.Group onValueChange={taskFilter} value={checked}>
          <View style={styles.radioButtons}>
            <Text>All</Text>
            <RadioButton value="all" />
            <Text>Completed</Text>
            <RadioButton value="completed" />
            <Text>Unfinished</Text>
            <RadioButton value="unfinished" />
          </View>
        </RadioButton.Group>

        <View style={styles.items}>
          <ScrollView>
            {/* All task items */}
            {filtered.map((todo) => {
              return (
                <TouchableOpacity key={todo.id}>
                  <Task
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
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
  radioButtons: {
    flexDirection: "row",
    alignItems: "center",
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
