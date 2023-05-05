import { Image, Text, View } from "react-native";

import taskImg from "../../assets/task.png";

import { styles } from "./styles";

export function NoTaskMessage() {
  return (
    <View style={styles.container}>
      <Image source={taskImg} style={styles.image} />

      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.description}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
