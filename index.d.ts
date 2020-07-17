import { TextStyle, StyleProp } from "react-native";
import React from "react";

export interface HighlighterProps {
  autoEscape?: boolean;
  highlightStyle?: StyleProp<TextStyle>;
  sanitize?: (text: string) => string;
  searchWords: string[];
  style?: StyleProp<TextStyle>;
  textToHighlight: string;
}

const Highlighter: React.FC<HighlighterProps>;

export default Highlighter;
