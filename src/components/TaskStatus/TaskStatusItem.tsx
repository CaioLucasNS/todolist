import { Text, View } from "react-native";

import { theme } from "../../theme/theme";
import { styles } from "./styles";

type Props = {
  status: "created" | "concluded";
  number?: number;
};

export function TaskStatusItem({ status, number = 0 }: Props) {
  return (
    <View style={styles.content}>
      <Text
        style={[
          styles.title,
          status === "concluded" && { color: theme.colors.purple },
        ]}
      >
        {status === "created" ? "Criadas" : "Concluídas"}
      </Text>

      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
}
