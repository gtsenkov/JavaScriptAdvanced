function createE(type, content, className) {
    const result = document.createElement(type);
    result.textContent = content;
    if (className) {
        result.className = className;
    }
    return result;
}