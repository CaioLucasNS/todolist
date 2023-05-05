import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
    alignItems: "center",
  },
  content: {
    marginHorizontal: 24,
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
