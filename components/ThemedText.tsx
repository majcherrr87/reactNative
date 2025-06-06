import { Text, TextStyle, useColorScheme } from "react-native";
import { StyleProp } from "react-native";
import { Colors } from "../constants/Colors";

type ThemedTextProps = {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  title?: boolean;
};

const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  children,
  title = false,
  ...props
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  const textColor = title ? theme.title : theme.text;
  return (
    <Text style={[{ color: textColor }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
