import { Text, SafeAreaView } from "react-native";
import { Header } from "../../components/Header";
import { NewTaskInput } from "../../components/NewTaskInput";

import { styles } from "./styles";

export function Home() {
  return (
    <>
      <Header />

      <SafeAreaView style={styles.container}>
        <NewTaskInput />

        <Text style={styles.notTaskTitle}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.notTaskDescription}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </SafeAreaView>
    </>
  );
}
