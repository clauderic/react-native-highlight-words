import { TextStyle, StyleProp, TextProps } from "react-native";
import React from "react";

type HighlighterProps = {
  /**
   * Escape characters which are meaningful in regular expressions
   */
  autoEscape?: boolean;

  /**
   * Styles applied to highlighted text
   */
  highlightStyle?: StyleProp<TextStyle>;

  /**
   * Process each search word and text to highlight before comparing (eg remove accents);
   */
  sanitize?: (text: string) => string;

  /**
   * This function is called on press.
   */
  onPress?: ((event: GestureResponderEvent) => void) | undefined;

  /**
   * This function is called on press of the highlighted text.
   */
  onPressHighlighted?: ((text: string) => void) | undefined;

  /**
   * Array of search words
   */
  searchWords: string[];

  /**
   * Styles applied to the text wrapper
   */
  style?: StyleProp<TextStyle>;

  /**
   * Text to highlight matches in
   */
  textToHighlight: string;
} & TextProps;

declare const Highlighter: React.FC<HighlighterProps>;
export default Highlighter;
