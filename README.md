# Notes App

A React Native notes app built with Expo Router. It includes a notes listing screen and a separate note editor screen UI.

## Demo Video




## Screens

- Notes Listing Screen: displays notes in a scrollable `FlatList` with search/filter support.
- Note Editor Screen: provides title and body inputs for creating or editing a note.

## Components Used

- `NotesListScreen`: renders the notes list, search input, and theme toggle.
- `NoteCard`: renders each note inside a `Pressable` card.
- `NoteEditorScreen`: renders the editor header, title input, body input, back button, and save button.
- `SafeAreaView`: keeps content inside safe screen boundaries.
- `FlatList`: renders the scrollable notes list.
- `TextInput`: used for search, note title, and note body.
- `Pressable`: used for note cards and buttons.
- `KeyboardAvoidingView`: prevents the keyboard from overlapping editor inputs.
- `ScrollView`: allows the editor content to remain usable on smaller screens.
- `ImageBackground`: used in the editor header.
- `Ionicons`: used for the light/dark theme toggle icon.

## Hooks Used

- `useState`: manages search text, note title/body state, and theme state.
- `useMemo`: memoizes filtered notes and themed styles.
- `useEffect`: updates the native system background color when the theme changes.
- `useColorScheme`: reads the device light/dark preference.
- `useWindowDimensions`: adjusts layout and themed styles based on screen width.

## UI Enhancements

- Light and dark theme support.
- Icon-based theme toggle.
- Searchable notes list.
- Pressable note cards with timestamp/date pills.
- Separate editor route at `/editor`.
- Keyboard-aware editor layout.
- Scrollable editor content for long-form writing.
- Image header on the editor screen.
- Square, border-based UI styling with no rounded corners.

## Run the Project

```bash
npm install
npx expo start
```

Open the app in Expo Go, an emulator, simulator, or the web target from the Expo CLI prompt.
