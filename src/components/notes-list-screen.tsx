import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

import { NoteCard } from "@/components/note-card";
import type { Note } from "@/constants/notes";
import type { Palette, ThemedStyles } from "@/constants/theme";

type NotesListScreenProps = {
  darkMode: boolean;
  filteredNotes: Note[];
  palette: Palette;
  query: string;
  setDarkMode: (value: boolean) => void;
  setQuery: (value: string) => void;
  themedStyles: ThemedStyles;
};

export function NotesListScreen({
  darkMode,
  filteredNotes,
  palette,
  query,
  setDarkMode,
  setQuery,
  themedStyles,
}: NotesListScreenProps) {
  const flattenedInputStyle = StyleSheet.flatten([
    styles.searchInput,
    themedStyles.input,
  ]);

  return (
    <FlatList
      style={[styles.list, { backgroundColor: palette.background }]}
      ListEmptyComponent={
        <View style={[styles.emptyState, themedStyles.emptyState]}>
          <Text style={[styles.emptyTitle, themedStyles.primaryText]}>
            No notes found
          </Text>
          <Text style={[styles.emptyCopy, themedStyles.secondaryText]}>
            Try a different keyword or clear your search field.
          </Text>
        </View>
      }
      ListHeaderComponent={
        <View style={styles.listHeader}>
          <View style={styles.titleRow}>
            <View>
              <Text style={[styles.eyebrow, themedStyles.eyebrow]}>
                Notes App
              </Text>
              <Text style={[styles.screenTitle, themedStyles.primaryText]}>
                All notes
              </Text>
            </View>
            <View style={[styles.themeControl, themedStyles.themeToggle]}>
              <Pressable
                accessibilityLabel={
                  darkMode ? "Switch to light theme" : "Switch to dark theme"
                }
                accessibilityRole="button"
                onPress={() => setDarkMode(!darkMode)}
                style={({ pressed }) => [
                  styles.iconToggle,
                  {
                    backgroundColor: darkMode
                      ? palette.accentSoft
                      : palette.muted,
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
              <Switch
                onValueChange={setDarkMode}
                thumbColor={darkMode ? palette.accent : palette.card}
                trackColor={{
                  false: palette.mutedStrong,
                  true: palette.accentSoft,
                }}
                value={darkMode}
              />
            </View>
          </View>

          <TextInput
            onChangeText={setQuery}
            placeholder="Search notes"
            placeholderTextColor={palette.secondary}
            returnKeyType="search"
            selectionColor={palette.accent}
            style={flattenedInputStyle}
            value={query}
          />
        </View>
      }
      contentContainerStyle={[styles.listContent, themedStyles.listPadding]}
      data={filteredNotes}
      extraData={`${palette.background}-${palette.card}-${palette.text}`}
      keyExtractor={(item) => item.id}
      keyboardShouldPersistTaps="handled"
      renderItem={({ item }) => (
        <NoteCard note={item} palette={palette} themedStyles={themedStyles} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  emptyCopy: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  emptyState: {
    alignItems: "center",
    borderWidth: 1,
    gap: 6,
    marginTop: 4,
    padding: 22,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: "800",
  },
  listContent: {
    gap: 14,
    paddingBottom: 24,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  listHeader: {
    gap: 18,
  },
  screenTitle: {
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 40,
  },
  searchInput: {
    borderWidth: 1,
    elevation: 1,
    fontSize: 16,
    minHeight: 52,
    paddingHorizontal: 18,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  iconToggle: {
    alignItems: "center",
    height: 42,
    justifyContent: "center",
    width: 42,
  },
  themeControl: {
    alignItems: "center",
    borderWidth: 1,
    flexDirection: "row",
    gap: 6,
    minHeight: 46,
    paddingLeft: 4,
    paddingRight: 8,
  },
  titleRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0,
    textTransform: "uppercase",
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
});
