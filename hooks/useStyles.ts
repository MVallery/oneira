import { useAppTheme } from "@/state/context/themeContext";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const useStyles = <T extends NamedStyles<T>, V = {}>(
  stylesFn: (vars: any & V) => T,
  customVars?: V
): T => {
  const themeVars = useAppTheme(); // { colors, fontSize, spacing, ... }
  return StyleSheet.create(stylesFn({ ...themeVars, ...customVars }));
};

export const useStyles = 