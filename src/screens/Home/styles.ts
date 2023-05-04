import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.gray400,
    alignItems: "center",
    justifyContent: "center",
  },
  notTaskTitle: {
    color: theme.gray200,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
  notTaskDescription: {
    color: theme.gray300,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
});
