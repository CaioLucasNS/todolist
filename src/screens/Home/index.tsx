import { View } from "react-native";

import { Header } from "../../components/Header";
import { NewTaskInput } from "../../components/NewTaskInput";
import { NoTaskMessage } from "../../components/NoTaskMessage";
import { TaskStatus } from "../../components/TaskStatus";

import { styles } from "./styles";

export function Home() {
  return (
    <>
      <Header />

      <View style={styles.container}>
        <View style={styles.content}>
          <NewTaskInput />

          <TaskStatus />

          <NoTaskMessage />
        </View>
      </View>
    </>
  );
}
