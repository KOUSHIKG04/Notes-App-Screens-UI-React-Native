import { useEffect, useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { StyleSheet, useColorScheme, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NoteEditorScreen } from "@/components/note-editor-screen";
import {
  createThemedStyles,
  darkPalette,
  lightPalette,
} from "@/constants/theme";

export default function Editor() {
  const deviceScheme = useColorScheme();
  const { width } = useWindowDimensions();
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [title, setTitle] = useState("Meeting takeaways");
  const [body, setBody] = useState(
    "Start with the core flow, keep the interface quiet, and leave enough breathing room for longer notes. Review spacing on both phone and tablet sizes before submission."
  );

  const isTablet = width >= 760;
  const resolvedDarkMode = darkMode ?? (deviceScheme === "dark");
  const palette = resolvedDarkMode ? darkPalette : lightPalette;
  const themedStyles = useMemo(
    () => createThemedStyles(palette, width, isTablet),
    [palette, width, isTablet]
  );

  useEffect(() => {
    void SystemUI.setBackgroundColorAsync(palette.background);
  }, [palette.background]);

  return (
    <SafeAreaView style={[styles.safeArea, themedStyles.safeArea]}>
      <StatusBar style={resolvedDarkMode ? "light" : "dark"} />
      <NoteEditorScreen
        body={body}
        darkMode={resolvedDarkMode}
        palette={palette}
        setDarkMode={setDarkMode}
        setBody={setBody}
        setTitle={setTitle}
        themedStyles={themedStyles}
        title={title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
