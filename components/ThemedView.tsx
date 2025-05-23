import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";

import { ViewStyle } from "react-native";

import { ReactNode } from "react";

interface ThemedViewProps {
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
}

const ThemedView = ({ style, children, ...props }: ThemedViewProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;
