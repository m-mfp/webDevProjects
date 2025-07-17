const checkBtn = document.getElementById("check-btn")
const textInput = document.getElementById("text-input")
const result = document.getElementById("result")


checkBtn.addEventListener("click", () => {checkInputValue(textInput.value)})

function checkInputValue(msg) {
    let lowerCaseMsg = msg.toLowerCase();
    if (msg == "") {
        return alert("Please input a value")
    }

    let compareMsg = lowerCaseMsg.replaceAll(/[.,:;!?\\_\-()\/\[\]{}\s]/g, '');
    let reversedMsg = lowerCaseMsg.replaceAll(/[.,:;!?\\_\-()\/\[\]{}\s]/g, '');
    reversedMsg = reversedMsg.split("").reverse().join("")

    reversedMsg == compareMsg? result.innerText = msg + " is a palindrome" : result.innerText = msg + " is not a palindrome"
}


