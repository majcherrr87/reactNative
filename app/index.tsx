import { StyleSheet, Text, Image } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/img/logo_light.png";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Text style={styles.title}>The number 1</Text>

      <Spacer height={10} />
      <ThemedText>Reading List app</ThemedText>
      <Spacer />

      <Link href="/about" style={styles.link}>
        About page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact page
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  img: {
    marginVertical: 20,
  },
});
