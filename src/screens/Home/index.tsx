import { Text, SafeAreaView, View } from "react-native";
import { Header } from "../../components/Header";
import { NewTaskInput } from "../../components/NewTaskInput";
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

          <Text style={styles.notTaskTitle}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.notTaskDescription}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View>
    </>
  );
}
