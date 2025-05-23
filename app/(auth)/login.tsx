import { StyleSheet, Text, View } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spracer from "../../components/Spacer";
import { Link } from "expo-router";

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <Spracer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <Spracer />
      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>
          Registed instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: { textAlign: "center", fontSize: 18, marginBottom: 20 },
});
