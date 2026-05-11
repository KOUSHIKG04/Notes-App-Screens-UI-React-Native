import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { Note } from "@/constants/notes";
import {
  accentColors,
  type Palette,
  type ThemedStyles,
} from "@/constants/theme";

type NoteCardProps = {
  note: Note;
  palette: Palette;
  themedStyles: ThemedStyles;
};

export function NoteCard({ note, palette, themedStyles }: NoteCardProps) {
  return (
    <Pressable
      android_ripple={{ color: palette.muted }}
      onPress={() => router.push("/editor")}
      style={({ pressed }) => [
        styles.noteCard,
        {
          backgroundColor: palette.card,
          borderColor: palette.border,
          shadowColor: palette.shadow,
        },
        pressed && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.accentBar,
          { backgroundColor: accentColors[note.accentStyle] },
        ]}
      />
      <View style={[styles.cardContent, { backgroundColor: palette.card }]}>
        <View style={styles.cardTopRow}>
          <Text style={[styles.noteTitle, themedStyles.primaryText]}>
            {note.title}
          </Text>
          <View
            style={[
              styles.datePill,
              { backgroundColor: palette.muted, borderColor: palette.border },
            ]}
          >
            <Text style={[styles.noteDate, themedStyles.secondaryText]}>
              {note.date}
            </Text>
          </View>
        </View>
        <Text
          numberOfLines={2}
          style={[styles.notePreview, themedStyles.secondaryText]}
        >
          {note.preview}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  accentBar: {
    width: 5,
  },
  cardContent: {
    flex: 1,
    gap: 10,
    padding: 16,
  },
  cardTopRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },
  datePill: {
    borderWidth: 1,
    flexShrink: 0,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  noteCard: {
    borderWidth: 1,
    elevation: 2,
    flexDirection: "row",
    minHeight: 116,
    overflow: "hidden",
    shadowOffset: {
      height: 8,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
  },
  noteDate: {
    fontSize: 12,
    fontWeight: "700",
  },
  notePreview: {
    fontSize: 14,
    lineHeight: 21,
  },
  noteTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
});
