export type AccentStyle = "blue" | "gold" | "rose" | "teal" | "violet";

export type Note = {
  id: string;
  title: string;
  preview: string;
  date: string;
  accentStyle: AccentStyle;
};

export const NOTES: Note[] = [
  {
    id: "1",
    title: "Launch checklist",
    preview:
      "Confirm screenshots, refresh store copy, and send the release notes to the team before noon.",
    date: "Today, 9:42 AM",
    accentStyle: "blue",
  },
  {
    id: "2",
    title: "Reading list",
    preview:
      "Add the product strategy essay, React Native layout notes, and the design systems chapter.",
    date: "Yesterday",
    accentStyle: "teal",
  },
  {
    id: "3",
    title: "Weekend ideas",
    preview:
      "Try the new coffee place, organize the desk drawers, and outline the next course project.",
    date: "May 8",
    accentStyle: "gold",
  },
  {
    id: "4",
    title: "Meeting takeaways",
    preview:
      "Keep the editor focused, make search immediate, and improve empty states after the first pass.",
    date: "May 7",
    accentStyle: "violet",
  },
  {
    id: "5",
    title: "App polish",
    preview:
      "Check keyboard spacing on small phones and make tablet layouts feel less stretched.",
    date: "May 5",
    accentStyle: "rose",
  },
];
