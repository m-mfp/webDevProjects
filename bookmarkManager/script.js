const mainSection = document.getElementById("main-section")
const categoryDropdown = document.getElementById("category-dropdown")
const viewCategoryBtn = document.getElementById("view-category-button")
const addBookmarkBtn = document.getElementById("add-bookmark-button")
const formSection = document.getElementById("form-section")
const closeFormBtn = document.getElementById("close-form-button")
const addBookmarkBbtnForm = document.getElementById("add-bookmark-button-form")

const bookmarkListSection = document.getElementById("bookmark-list-section")
const categoryList = document.getElementById("category-list")

const closeListBtn = document.getElementById("close-list-button")
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button")

function getBookmarks(){
    try{
        let array = JSON.parse(localStorage.getItem("bookmarks"));
        let validArr;
        array.forEach((bookmark)=>{
            let hasName = Object.hasOwn(bookmark,"name");
            let hasCat = Object.hasOwn(bookmark,"category");
            let hasURL = Object.hasOwn(bookmark,"url");
            if (hasName && hasCat && hasURL){
                validArr = true;
            } else {validArr = false}
        }) 
        return validArr ? array : []
    } catch(error) {return []}
}

function displayOrCloseForm(){
    mainSection.classList.toggle("hidden")
    formSection.classList.toggle("hidden")
}

// First add Button
addBookmarkBtn.addEventListener("click", () => {
    displayOrCloseForm()
    formSection.querySelector(".category-name").innerText = categoryDropdown.value
})

// Close button
closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm()
})


// Button to actually add the Bookmark
addBookmarkBbtnForm.addEventListener("click", () => {

    const nameInput = formSection.querySelector("#name").value
    const urlInput = formSection.querySelector("#url").value

    if (nameInput == "" || urlInput == ""){
        alert("Please, provide Name and URL")
        return
    }

    const bookmarkObj = {
        name: nameInput,
        category: categoryDropdown.value,
        url: urlInput,
    }

    let bookmarks = getBookmarks()
    bookmarks.push(bookmarkObj)
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // reset
    formSection.querySelector("#name").value = ""
    formSection.querySelector("#url").value = ""

    displayOrCloseForm()
})


function displayOrHideCategory(){
    mainSection.classList.toggle("hidden")
    bookmarkListSection.classList.toggle("hidden")
}


// Button to View
viewCategoryBtn.addEventListener("click", () => {
    displayBookmarks()
    displayOrHideCategory()
})

// Close button
closeListBtn.addEventListener("click", () => {
    categoryList.innerHTML = ""
    displayOrHideCategory()
})

// Delete Btn
deleteBookmarkBtn.addEventListener("click", () => {
    try {
        let bookmarks = getBookmarks()
        const selectedRadio = document.querySelector("input[type=radio]:checked")
        const bookmarksArrIndex = bookmarks.findIndex((item) => item.name === selectedRadio.value && item.category === categoryDropdown.value)
        bookmarks.splice(bookmarksArrIndex, 1)
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }catch(error){alert("Please, select which bookmark to delete.")}

    displayBookmarks()
})

function displayBookmarks() {
    bookmarkListSection.querySelector(".category-name").innerText = categoryDropdown.value
    categoryList.innerHTML = ""
    let bookmarks = getBookmarks();

    if (bookmarks.some(bookmark => bookmark.category === categoryDropdown.value)){
        bookmarks.forEach((bookmark)=>{
        if (bookmark.category === categoryDropdown.value){
            categoryList.innerHTML += 
            `<p>
            <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="${bookmark.category}"/>
            <label for="${bookmark.name}">
            <a href="${bookmark.url}">${bookmark.name}</a>
            </label>
            </p>
            `
        }
        })
    }
    else{categoryList.innerHTML = `<p>No Bookmarks Found</p>`}
}
