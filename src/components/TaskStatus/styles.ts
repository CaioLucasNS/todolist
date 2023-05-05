import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 32,
    paddingBottom: 21,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray400,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginRight: 8,
    fontSize: theme.fonts.md,
    fontWeight: "700",
    lineHeight: 17,
    color: theme.colors.blue,
  },
  numberContainer: {
    backgroundColor: theme.colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  number: {
    fontSize: theme.fonts.sm,
    color: theme.colors.white,
  },
});
