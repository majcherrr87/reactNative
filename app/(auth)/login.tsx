import { Pressable, StyleSheet, Text, View } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";

const Login = () => {
  const handleSubmit = () => {
    // Handle login logic here
    console.log("Login button pressed");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>

      <Spacer />
      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>
          Registed instead
        </ThemedText>
      </Link>
      <Spacer />
      <Link href="/">
        <ThemedText style={{ textAlign: "center" }}>Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { textAlign: "center", fontSize: 18, marginBottom: 20 },
});
