import { TextStyle } from "react-native";
import React from "react";

/**
 * Escape characters which are meaningful in regular expressions
 */
export type AutoEscape = boolean;

/**
 * Styles applied to highlighted text
 */
export interface HighlightStyle extends TextStyle {}

/**
 * Process each search word and text to highlight before comparing (eg remove accents);
 */
export type Sanitize = (text: string) => string;

/**
 * Array of search words
 */
export type SearchWords = string[];

/**
 * Styles applied to the text wrapper
 */
export interface Style extends TextStyle {}

/**
 * Text to highlight matches in
 */
export type TextToHighlight = string;

export interface HighlighterProps {
  autoEscape?: AutoEscape;
  highlightStyle?: HighlightStyle;
  sanitize?: Sanitize;
  searchWords: SearchWords;
  style?: Style;
  textToHighlight: TextToHighlight;
}

const Highlighter: React.FC<HighlighterProps>;

export default Highlighter;
