import { useState } from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { NewTaskInput } from "../../components/NewTaskInput";
import { NoTaskMessage } from "../../components/NoTaskMessage";
import { TaskStatus } from "../../components/TaskStatus";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTaks] = useState([]);

  return (
    <>
      <Header />

      <View style={styles.container}>
        <View style={styles.content}>
          <NewTaskInput />

          <TaskStatus hasDivider={tasks.length === 0} />

          {tasks.length === 0 && <NoTaskMessage />}

          {/* <NewTask /> */}
        </View>
      </View>
    </>
  );
}
