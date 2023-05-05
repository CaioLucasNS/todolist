import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../../theme/theme";
import { styles } from "./styles";

type Props = TextInputProps & {
  onConfirm: () => void;
};

export function NewTaskInput({ onConfirm, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.colors.gray300}
        onSubmitEditing={onConfirm}
        returnKeyType="done"
        {...rest}
      />

      <TouchableOpacity style={styles.addButton} onPress={onConfirm}>
        <Ionicons
          name="add-circle-outline"
          size={20}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}
