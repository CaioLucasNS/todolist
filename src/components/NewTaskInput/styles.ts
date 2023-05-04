import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: -26,
  },
  input: {
    width: "70%",
    backgroundColor: theme.colors.gray500,
    borderRadius: 6,
    padding: 16,
    marginRight: 4,
    color: theme.colors.white,
    fontSize: theme.fonts.lg,
    lineHeight: 22,
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 52,
    height: 52,
    backgroundColor: theme.colors.blueDark,
    borderRadius: 6,
  },
});
