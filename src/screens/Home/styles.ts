import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    gap: 16,
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 8,
    fontSize: 14,
  },
  button: {
    width: 44,
    height: 44,
    backgroundColor: "#31CF67",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
  },
  containerList: {
    flexDirection: "row",
  },
  textList: {
    flex: 1,
    backgroundColor: "#3FFF",
    height: 44,
    padding: 12,
  },
  buttonList: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF3300",
  },
  listEmptyText: {
    color: "#FFF",
    lineHeight: 24,
    fontSize: 14,
    textAlign: "center",
  },
});
