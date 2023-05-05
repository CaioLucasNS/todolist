import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.gray400,
    padding: 12,
    borderRadius: 8,

    marginBottom: 8,
  },
  unchecked: {
    borderColor: theme.colors.blue,
    borderWidth: 2,
    borderRadius: 999,
    width: 17,
    height: 17,
  },
  checked: {
    justifyContent: "center",
    alignItems: "center",
    width: 17,
    height: 17,
    borderRadius: 999,

    backgroundColor: theme.colors.purpleDark,
  },
  text: {
    color: theme.colors.gray100,
    maxWidth: 235,
    lineHeight: 20,
    textAlign: "justify",
  },
  delete: {
    color: theme.colors.gray300,
  },
});
