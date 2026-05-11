import { Ionicons } from "@expo/vector-icons";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import type { Palette, ThemedStyles } from "@/constants/theme";

type NoteEditorScreenProps = {
  body: string;
  darkMode?: boolean;
  palette: Palette;
  setBody: (value: string) => void;
  setDarkMode?: (value: boolean) => void;
  setTitle: (value: string) => void;
  themedStyles: ThemedStyles;
  title: string;
};

export function NoteEditorScreen({
  body,
  darkMode,
  palette,
  setBody,
  setDarkMode,
  setTitle,
  themedStyles,
  title,
}: NoteEditorScreenProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      style={[styles.keyboardView, { backgroundColor: palette.background }]}
    >
      {typeof darkMode === "boolean" && setDarkMode ? (
        <View style={styles.topBar}>
          <Pressable
            accessibilityLabel={
              darkMode ? "Switch to light theme" : "Switch to dark theme"
            }
            accessibilityRole="button"
            onPress={() => setDarkMode(!darkMode)}
            style={({ pressed }) => [
              styles.themeButton,
              themedStyles.backButton,
              {
                backgroundColor: darkMode ? palette.accentSoft : palette.card,
              },
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              color={darkMode ? palette.accent : palette.primary}
              name={darkMode ? "moon" : "sunny"}
              size={20}
            />
          </Pressable>
        </View>
      ) : null}
      <ScrollView
        contentContainerStyle={styles.editorScrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.editorScroll}
      >
        <View style={[styles.editorScreen, themedStyles.editorScreen]}>
          <ImageBackground
            imageStyle={styles.headerImage}
            resizeMode="cover"
            source={require("../../assets/images/logo-glow.png")}
            style={styles.editorHeader}
          >
            <View style={[styles.headerOverlay, themedStyles.headerOverlay]}>
              <Pressable
                style={({ pressed }) => [
                  styles.backButton,
                  themedStyles.backButton,
                  pressed && styles.pressed,
                ]}
              >
                <Text
                  style={[styles.backButtonText, themedStyles.backButtonText]}
                >
                  Back
                </Text>
              </Pressable>
              <View>
                <Text style={styles.editorEyebrow}>Editor</Text>
                <Text style={styles.editorHeading}>Create a focused note</Text>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.editorBody}>
            <TextInput
              onChangeText={setTitle}
              placeholder="Note title"
              placeholderTextColor={palette.secondary}
              selectionColor={palette.accent}
              style={[styles.titleInput, themedStyles.titleInput]}
              value={title}
            />
            <TextInput
              multiline
              onChangeText={setBody}
              placeholder="Start writing your note..."
              placeholderTextColor={palette.secondary}
              selectionColor={palette.accent}
              scrollEnabled
              style={[styles.bodyInput, themedStyles.bodyInput]}
              textAlignVertical="top"
              value={body}
            />
            <Pressable
              style={({ pressed }) => [
                styles.saveButton,
                themedStyles.saveButton,
                pressed && styles.pressed,
              ]}
            >
              <Text
                style={[styles.saveButtonText, themedStyles.saveButtonText]}
              >
                Save note
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderWidth: 1,
    justifyContent: "center",
    minHeight: 40,
    paddingHorizontal: 18,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: "700",
  },
  bodyInput: {
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 24,
    padding: 18,
  },
  editorBody: {
    gap: 14,
    padding: 18,
  },
  editorEyebrow: {
    color: "#DDEBFF",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  editorHeader: {
    minHeight: 170,
    overflow: "hidden",
  },
  editorHeading: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
    lineHeight: 32,
    maxWidth: 290,
  },
  editorScreen: {
    borderWidth: 1,
    overflow: "hidden",
  },
  editorScroll: {
    flex: 1,
  },
  editorScrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  headerImage: {
    opacity: 0.86,
  },
  headerOverlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 18,
  },
  keyboardView: {
    flex: 1,
    padding: 18,
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
  saveButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 54,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "800",
  },
  titleInput: {
    borderWidth: 1,
    fontSize: 24,
    fontWeight: "800",
    minHeight: 62,
    paddingHorizontal: 18,
  },
  themeButton: {
    alignItems: "center",
    borderWidth: 1,
    height: 40,
    justifyContent: "center",
    width: 44,
  },
  topBar: {
    alignItems: "flex-end",
    paddingBottom: 12,
  },
});
