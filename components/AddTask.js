import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTask = () => {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const handleAddTask = () => {
    Keyboard.dismiss();
    // if (taskItems.length < 6) {
    //   setTaskItems([...taskItems, task]);
    //   setTask(null);
    // }
    dispatch(addTodo({ title: value }));
    setValue(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder={"Write a task"}
        value={value}
        onChangeText={(value) => setValue(value)}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    backgroundColor: "#189407",
  },
  addText: {
    color: "#fff",
  },
});

export default AddTask;
