import { View } from "react-native";
import { TaskStatusItem } from "./TaskStatusItem";

import { styles } from "./styles";

export function TaskStatus() {
  return (
    <View style={styles.container}>
      <TaskStatusItem status="created" />
      <TaskStatusItem status="concluded" />
    </View>
  );
}
