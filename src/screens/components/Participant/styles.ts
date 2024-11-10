import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    flex: 1,
    color: "#FFF",
    fontSize: 14,
    marginLeft: 8,
  },
  button: {
    width: 44,
    height: 44,
    backgroundColor: "#E23C44",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
  },
});
