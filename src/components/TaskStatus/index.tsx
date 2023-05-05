import { View } from "react-native";
import { TaskStatusItem } from "./TaskStatusItem";

import { theme } from "../../theme/theme";
import { styles } from "./styles";

type Props = {
  hasDivider: boolean;
};

export function TaskStatus({ hasDivider }: Props) {
  return (
    <View
      style={[
        styles.container,
        hasDivider && {
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.gray400,
        },
      ]}
    >
      <TaskStatusItem status="created" />
      <TaskStatusItem status="concluded" />
    </View>
  );
}
