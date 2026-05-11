import { StyleSheet } from "react-native";

export type Palette = {
  accent: string;
  accentSoft: string;
  background: string;
  border: string;
  card: string;
  editor: string;
  muted: string;
  mutedStrong: string;
  onAccent: string;
  overlay: string;
  primary: string;
  secondary: string;
  shadow: string;
  text: string;
};

export const lightPalette: Palette = {
  accent: "#FDC700",
  accentSoft: "#FEFCE8",
  background: "#FFFFFF",
  border: "#E5E5E5",
  card: "#FFFFFF",
  editor: "#FAFAFA",
  muted: "#F5F5F5",
  mutedStrong: "#E5E5E5",
  onAccent: "#733E0A",
  overlay: "rgba(115, 62, 10, 0.46)",
  primary: "#0A0A0A",
  secondary: "#737373",
  shadow: "#A1A1A1",
  text: "#0A0A0A",
};

export const darkPalette: Palette = {
  accent: "#F0B100",
  accentSoft: "#27272A",
  background: "#0A0A0A",
  border: "rgba(255, 255, 255, 0.1)",
  card: "#171717",
  editor: "#262626",
  muted: "#262626",
  mutedStrong: "rgba(255, 255, 255, 0.15)",
  onAccent: "#733E0A",
  overlay: "rgba(10, 10, 10, 0.58)",
  primary: "#FAFAFA",
  secondary: "#A1A1A1",
  shadow: "#000000",
  text: "#FAFAFA",
};

export const accentColors = {
  blue: "#FFDF20",
  gold: "#F0B100",
  rose: "#D08700",
  teal: "#A65F00",
  violet: "#894B00",
} as const;

export function createThemedStyles(
  palette: Palette,
  width: number,
  isTablet: boolean
) {
  const horizontalPadding = width < 380 ? 16 : 22;

  return StyleSheet.create({
    backButton: {
      backgroundColor: palette.card,
      borderColor: palette.border,
    },
    backButtonText: {
      color: palette.primary,
    },
    bodyInput: {
      backgroundColor: palette.editor,
      borderColor: palette.border,
      color: palette.text,
      minHeight: isTablet ? 330 : 260,
    },
    editorScreen: {
      backgroundColor: palette.card,
      borderColor: palette.border,
      marginTop: isTablet ? 0 : 22,
    },
    emptyState: {
      backgroundColor: palette.card,
      borderColor: palette.border,
    },
    eyebrow: {
      color: palette.accent,
    },
    headerOverlay: {
      backgroundColor: palette.overlay,
    },
    input: {
      backgroundColor: palette.card,
      borderColor: palette.border,
      color: palette.text,
      shadowColor: palette.shadow,
    },
    listPadding: {
      paddingHorizontal: horizontalPadding,
    },
    noteCard: {
      backgroundColor: palette.card,
      borderColor: palette.border,
      shadowColor: palette.shadow,
    },
    primaryText: {
      color: palette.primary,
    },
    safeArea: {
      backgroundColor: palette.background,
    },
    saveButton: {
      backgroundColor: palette.accent,
    },
    saveButtonText: {
      color: palette.onAccent,
    },
    secondaryText: {
      color: palette.secondary,
    },
    themeToggle: {
      backgroundColor: palette.card,
      borderColor: palette.border,
    },
    titleInput: {
      backgroundColor: palette.editor,
      borderColor: palette.border,
      color: palette.text,
    },
  });
}

export type ThemedStyles = ReturnType<typeof createThemedStyles>;
