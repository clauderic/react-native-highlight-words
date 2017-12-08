import React from 'react';
import {Text} from 'react-native';
import {findAll} from 'highlight-words-core';
import PropTypes from 'prop-types';

Highlighter.propTypes = {
    autoEscape: PropTypes.bool,
    highlightStyle: Text.propTypes.style,
    searchWords: PropTypes.arrayOf(PropTypes.string).isRequired,
    textToHighlight: PropTypes.string.isRequired,
    sanitize: PropTypes.func,
    style: Text.propTypes.style
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
    style,
    ...props
}) {
    const chunks = findAll({textToHighlight, searchWords, sanitize, autoEscape});

    return (
        <Text style={style} {...props}>
            {chunks.map((chunk, index) => {
                const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);

                return (!chunk.highlight)
                    ? text
                    : (
                        <Text
                            key={index}
                            style={chunk.highlight && highlightStyle}
                        >
                            {text}
                        </Text>
                    );
            })}
        </Text>
    );
}
