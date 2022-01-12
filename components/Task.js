import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";

const Task = (props) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
          <CheckBox
            style={styles.checkbox}
            value={isSelected}
            onValueChange={setSelection}
          />
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={() => props.deleteTask(props.someIndex)}>
        <View style={styles.deleteWrapper}>
          <Text style={styles.deleteText}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#bbe4fb",
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  // circular: {
  //   width: 12,
  //   height: 12,
  //   borderColor: "#55BCF6",
  //   borderWidth: 2,
  //   borderRadius: 5,
  // },
  deleteWrapper: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    backgroundColor: "#c2221f",
  },
  deleteText: {
    color: "#fff",
  },
  checkbox: {
    width: "100%",
    height: "100%",
  },
});

export default Task;
