import { StyleSheet, Text, View } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spracer from "../../components/Spacer";
import { Link } from "expo-router";

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spracer />
      <ThemedText title={true} style={styles.title}>
        Register form an Account
      </ThemedText>

      <Spracer />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: { textAlign: "center", fontSize: 18, marginBottom: 20 },
});
