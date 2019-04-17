var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-java",
    indentUnit: 4,
    indentWithTabs: true,
});
