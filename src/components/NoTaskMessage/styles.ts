import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 48,
  },
  image: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  title: {
    color: theme.colors.gray200,
    fontSize: theme.fonts.md,
    fontWeight: "400",
    lineHeight: 20,
  },
  description: {
    color: theme.colors.gray300,
    fontSize: theme.fonts.md,
    fontWeight: "400",
    lineHeight: 20,
  },
});
