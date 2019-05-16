const marked = require('marked');
const _      = require('lodash');

const renderer = {

    // Block
    code(code)          { return code + '\n'; },
    blockquote(quote)   { return quote + '\n'; },
    heading(text)       { return text + '\n'; },
    hr()                { return '' },
    list(body)          { return body + '\n'; },
    listitem(text)      { return text + '\n'; },
    checkbox()          { return ''; },
    paragraph(text)     { return text + '\n'; },
    table(header, body) { return header + '\n' + body + '\n'; },
    tablerow(content)   { return content + '\n' },
    tablecell(content)  { return content + '\n'; },
    
    // Inline
    strong(text)        { return text; },
    em(text)            { return text; },
    codespan(code)      { return code; },
    br()                { return '\n' },
    del(text)           { return text; },
    link(_1, _2, text)  { return text; },
    image(_1, _2, text) { return text; },
    text(text)          { return text; },

};

/**
 * Returns markdown converted to plaintext, suitable to displaying without 
 * formatting. Preserves code fragments.
 */
module.exports = (markdown, escape=true) => {
    if (escape) {
        return _.escape(marked(markdown, { renderer }));
    } else {
        return marked(markdown, { renderer });
    }
};