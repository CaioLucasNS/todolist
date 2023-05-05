import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../../theme/theme";
import { styles } from "./styles";

export function NewTask() {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={checkbox ? styles.checked : styles.unchecked}
        onPress={() => setCheckbox(!checkbox)}
      >
        {checkbox && (
          <Entypo name="check" size={10} color={theme.colors.gray100} />
        )}
      </TouchableOpacity>

      <Text
        style={[
          styles.text,
          checkbox && {
            textDecorationLine: "line-through",
            color: theme.colors.gray300,
          },
        ]}
      >
        Texto da task Texto da task Texto da task Texto da task Texto da task
      </Text>

      <TouchableOpacity onPress={() => {}}>
        <EvilIcons name="trash" size={26} color={theme.colors.gray300} />
      </TouchableOpacity>
    </View>
  );
}
