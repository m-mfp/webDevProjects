const generateBtn = document.getElementById("generate-btn")
const startingArray = document.getElementById("starting-array")
const arrayContainer = document.getElementById("array-container")
const sortBtn = document.getElementById("sort-btn")

sortBtn.style.display="none"

function generateElement(){
    return Math.floor(Math.random()*100 + 1)
}

function generateArray(){
    let randomArray = []
    for (let i=5; i > 0; i--){
        randomArray.push(generateElement())
    }
    // return randomArray
    return [19,11,73,98,81]
}

function generateContainer(){
    return document.createElement("div")
}

function fillArrContainer(element, array){
    element.innerHTML = ""
    array.forEach((arrayVal) => {
        element.innerHTML += `<span>${parseInt(arrayVal)}</span>`
    })   
}

function isOrdered(int1, int2){
    return int1 <= int2
}

function swapElements(array, idx) {
    let isNumOrdered = isOrdered(array[idx], array[idx + 1]);
    if (!isNumOrdered) {
        let temp = array[idx];
        array[idx] = array[idx + 1];
        array[idx + 1] = temp;
    }
}

function highlightCurrentEls(element, idx){
    let elFirstChild = element.children[idx]
    let elSecondChild = element.children[idx+1]
    elFirstChild.style.border = 'dashed 2px red'
    elSecondChild.style.border = 'dashed 2px red'
}

generateBtn.addEventListener("click", () => {
    startingArray.style.display = "flex"
    while (arrayContainer.children.length > 1){
        arrayContainer.removeChild(arrayContainer.children[1]);
    }
    sortBtn.style.display = "block"

    const newArray = generateArray()
    fillArrContainer(startingArray, newArray)
})

sortBtn.addEventListener("click", () => {
    
    while (arrayContainer.children.length > 1){
        arrayContainer.removeChild(arrayContainer.children[1]);
    }

    let array = Array.from(startingArray.children).map(span => parseInt(span.textContent));

    for (let j = 0; j < 4; j++){
        for (let i = 0; i < 4; i++){
            if(i == 0 && j == 0){
                highlightCurrentEls(startingArray, i);
                swapElements(array, i);
            }
            else{
                let newContainer = arrayContainer.appendChild(generateContainer());
                fillArrContainer(newContainer, array);
                highlightCurrentEls(newContainer, i)
                swapElements(array, i);
            }
        } if(verify(array)){
            for (let i = 0; i < 4; i++){
                let newContainer = arrayContainer.appendChild(generateContainer());
                fillArrContainer(newContainer, array);
                highlightCurrentEls(newContainer, i)
                swapElements(array, i);
            }
            break
        }
    }
    let lastContainer = arrayContainer.appendChild(generateContainer());
    fillArrContainer(lastContainer, array);
    lastContainer.style.border = "3px solid green"
})

function verify(arr){
    let verifyList = []
    for (let i = 0; i < 4; i++){
        verifyList.push(isOrdered(arr[i], arr[i + 1]))
    }
    verifyList.every(v => v === true);
    return verifyList.every(v => v === true);
}