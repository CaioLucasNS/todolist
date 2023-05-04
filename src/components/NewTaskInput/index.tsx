import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../../theme/theme";
import { styles } from "./styles";

export function NewTaskInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.colors.gray300}
      />

      <TouchableOpacity style={styles.addButton}>
        <Ionicons
          name="add-circle-outline"
          size={20}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}
