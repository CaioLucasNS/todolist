import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray400,
    alignItems: "center",
    // justifyContent: "center",
  },
  notTaskTitle: {
    color: theme.colors.gray200,
    fontSize: theme.fonts.md,
    fontWeight: "400",
    lineHeight: 20,
  },
  notTaskDescription: {
    color: theme.colors.gray300,
    fontSize: theme.fonts.md,
    fontWeight: "400",
    lineHeight: 20,
  },
});
