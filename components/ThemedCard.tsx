import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";

import { StyleProp, ViewStyle } from "react-native";
import { Colors } from "../constants/Colors";

type ThemedCardProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const ThemedCard: React.FC<ThemedCardProps> = ({
  style,
  children,
  ...props
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
