import React from "react";
import { Text } from "react-native";
import { findAll } from "highlight-words-core";
import PropTypes, { oneOfType } from "prop-types";
import { TextPropTypes } from "deprecated-react-native-prop-types";

Highlighter.propTypes = {
    autoEscape: PropTypes.bool,
    highlightStyle: TextPropTypes.style,
    searchWords: oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.instanceOf(RegExp))
    ]).isRequired,
    textToHighlight: PropTypes.string.isRequired,
    sanitize: PropTypes.func,
    style: TextPropTypes.style
};

/**
 * Highlights all occurrences of search terms (searchText) within a string (textToHighlight).
 * This function returns an array of strings and <Text> elements (wrapping highlighted words).
 */
export default function Highlighter({
    autoEscape,
    highlightStyle,
    searchWords,
    textToHighlight,
    sanitize,
    onPress,
    onPressHighlighted,
    style,
    ...props
}) {
    const chunks = findAll({
        textToHighlight,
        searchWords,
        sanitize,
        autoEscape
    });

    return (
        <Text style={style} {...props} onPress={onPress}>
            {chunks.map((chunk, index) => {
                const text = textToHighlight.substr(
                    chunk.start,
                    chunk.end - chunk.start
                );

                return !chunk.highlight ? (
                    text
                ) : (
                    <Text
                        key={index}
                        style={chunk.highlight && highlightStyle}
                        onPress={
                            onPressHighlighted
                                ? () => onPressHighlighted(text)
                                : undefined
                        }
                    >
                        {text}
                    </Text>
                );
            })}
        </Text>
    );
}
