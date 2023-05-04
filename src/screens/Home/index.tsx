import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.notTaskTitle}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.notTaskDescription}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </SafeAreaView>
  );
}
