// Initialize CodeMirror on the textarea
const editor = CodeMirror.fromTextArea(document.getElementById('htmlInput'), {
    mode: 'xml',
    theme: 'default',
    lineNumbers: true,
    lineWrapping: true,
    autoCloseTags: true,
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    },
    hintOptions: {
        schemaInfo: CodeMirror.htmlSchema
    }
});

// Update the output div with the HTML from the CodeMirror editor
editor.on('change', () => {
    const htmlOutput = document.getElementById('htmlOutput');
    htmlOutput.innerHTML = editor.getValue();
});
