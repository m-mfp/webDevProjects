const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
    const iflag = caseInsensitiveFlag.checked;
    const gflag = globalFlag.checked;

    if (iflag && gflag) {
        return "ig";
    } else if (iflag) {
        return "i";
    } else if (gflag) {
        return "g";
    } else {
        return "";
    }
}

function getMatches() {
    const flags = getFlags();
    const regex = new RegExp(regexPattern.value, flags)
    let matches = stringToTest.innerText.match(regex)
    if (matches) {
        testResult.innerText = matches
        stringToTest.innerHTML = stringToTest.innerHTML.replace(regex, (content) => `<span class='highlight'>${content}</span>`)
    } else {testResult.innerText = "no match"}
}


testButton.addEventListener("click", getMatches)