import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Finalmente deu certo</Text>
        <Text style={styles.subtitle}>Uh</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#b0e0e6",
  },
  header: {
    width: "1000%",
    height: 180,
    backgroundColor: "#13373b",
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 660,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0c4247",
    marginBottom: 474,
    marginRight: 70,
  },
  subtitle: {
    fontSize: 23,
    color: "#445a6e",
    position: "absolute",
    top: 110,
  },
});
