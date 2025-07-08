// Variables
const form = document.getElementById("form")
const fullName = document.getElementById("full-name");
const emailAddress = document.getElementById("email");
const orderNumber = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const productQuantity = document.getElementById("quantity");
const complaintReason = document.querySelectorAll("input[type=checkbox]")
const complaintDescription = document.getElementById("complaint-description");
const desiredSolution = document.querySelectorAll("input[type=radio]");
const solutionDescription = document.getElementById("solution-description");
const submitButton = document.getElementById("submit-btn");
const messageBox = document.getElementById("message-box");

// // unchecking all boxes at start
// complaintReason.forEach(checkbox => {
//     checkbox.checked = false;
// });
// desiredSolution.forEach(checkbox => {
//     checkbox.checked = false;
// });

// Validate Functions
function validateFullName(fullName) {
    return fullName.value != "";
}

function validateEmail(emailAddress) {
    const emailRegex = /^\S+\@\S+\.\S+$/i;
    return emailRegex.test(emailAddress.value)
}

function validateOrderNumber(orderNumber) {
    const orderNumRegex = /^2024\d{6}$/;
    return orderNumRegex.test(orderNumber.value);
}

function validateProductCode(productCode) {
    const productCodeRegex = /^[a-zA-Z]{2}\d{2}\-[a-zA-Z]{1}\d{3}\-[a-zA-Z]{2}\d{1}$/;
    return productCodeRegex.test(productCode.value)
}

function validateQuantity(quantity) {
    const quantityRegex = /^[1-9]+$/;
    return quantityRegex.test(quantity.value)
}

function validateComplaintsGroup(checkedReasons) {
    return checkedReasons.length !== 0;
}

function validateComplaintDescription(checkedReasons) {
    const length = complaintDescription.value.length;
    if (checkedReasons.includes("other")) {
        return length >= 20;
    }
    return length === 0;
}

function validateDesiredSolution(desiredSolution) {
    return desiredSolution.length !== 0;
}

function validateSolutionDescription(checkedSolutions) {
    if (checkedSolutions.includes("other")) {
        return solutionDescription.value.length >= 20;
    }
    return solutionDescription.value.length == 0;
}

// Get Value Functions
function getCheckedReason() {
    return Array.from(complaintReason)
        .filter(i => i.checked)
        .map(i => i.value);
}

function getDesiredSolution() {
    return Array.from(desiredSolution)
        .filter(i => i.checked)
        .map(i => i.value);
}

// Form
function validateForm() {
    let filledForm = {
        'full-name': validateFullName(fullName),
        'email': validateEmail(emailAddress),
        'order-no': validateOrderNumber(orderNumber),
        'product-code': validateProductCode(productCode),
        'quantity': validateQuantity(productQuantity),
        'complaints-group': validateComplaintsGroup(getCheckedReason()),
        'complaint-description': validateComplaintDescription(getCheckedReason()),
        'solutions-group': validateDesiredSolution(getDesiredSolution()),
        'solution-description': validateSolutionDescription(getDesiredSolution())
    }
    return filledForm
}

function isValid(validatedForm) {
    const arrayForm = Object.values(validatedForm)
    return arrayForm.every((val) => val == true)
}

// Change event
form.addEventListener("change", (event) => {
    var borderColor = validateForm()[event.target.id]? "green" : "red";
    event.target.style.borderColor = borderColor
    if(event.target.type == "checkbox" || event.target.type == "radio"){
        borderColor = validateForm()[`${event.target.closest("fieldset").id}`]? "green" : "red"
        event.target.closest("fieldset").style.borderColor = borderColor
    }
})

// Helper function to set border color based on validation
function setBorderColor(field, isValid) {
    const borderColor = isValid ? "green" : "red";

    if (NodeList.prototype.isPrototypeOf(field)) {
        field.forEach((element) => {
            element.closest("fieldset").style.borderColor = borderColor;
        });
    } else {
        field.style.borderColor = borderColor;
    }
}


// SUBMIT BUTTON #1
form.addEventListener("submit", submit);

function submit(){
    const formValidationResults = validateForm();

    if (isValid(formValidationResults)) {
        document.getElementById("message-box").textContent = "validation passed";
        form.submit();
    } else {
        setBorderColor(fullName, formValidationResults['full-name']);
        setBorderColor(emailAddress, formValidationResults['email']);
        setBorderColor(orderNumber, formValidationResults['order-no']);
        setBorderColor(productCode, formValidationResults['product-code']);
        setBorderColor(productQuantity, formValidationResults['quantity']);

        setBorderColor(complaintReason, formValidationResults['complaints-group']);
        setBorderColor(complaintDescription, formValidationResults['complaint-description']);
        setBorderColor(desiredSolution, formValidationResults['solutions-group']);
        setBorderColor(solutionDescription, formValidationResults['solution-description']);
        document.getElementById("message-box").textContent = "validation failed";
    }
}






// ACEPTED SOLUTION FOR THE WEBSITE ----> SO WRONG BY THE WAY
// // Variables
// const form = document.getElementById("form")
// const fullName = document.getElementById("full-name");
// const emailAddress = document.getElementById("email");
// const orderNumber = document.getElementById("order-no");
// const productCode = document.getElementById("product-code");
// const productQuantity = document.getElementById("quantity");
// const complaintReason = document.querySelectorAll("input[type=checkbox]")
// const complaintDescription = document.getElementById("complaint-description");
// const desiredSolution = document.querySelectorAll("input[type=radio]");
// const solutionDescription = document.getElementById("solution-description");
// const submitButton = document.getElementById("submit-btn");
// const messageBox = document.getElementById("message-box");

// // Validate Functions
// function validateFullName(fullName) {
//     return fullName.value != "";
// }

// function validateEmail(emailAddress) {
//     const emailRegex = /^\S+\@\S+\.\S+$/i;
//     return emailRegex.test(emailAddress.value)
// }

// function validateOrderNumber(orderNumber) {
//     const orderNumRegex = /^2024\d{6}$/;
//     return orderNumRegex.test(orderNumber.value);
// }

// function validateProductCode(productCode) {
//     const productCodeRegex = /^[a-zA-Z]{2}\d{2}\-[a-zA-Z]{1}\d{3}\-[a-zA-Z]{2}\d{1}$/;
//     return productCodeRegex.test(productCode.value)
// }

// function validateQuantity(quantity) {
//     const quantityRegex = /^[1-9]+$/;
//     return quantityRegex.test(quantity.value)
// }

// function validateComplaintsGroup(checkedReasons) {
//     return checkedReasons.length !== 0;
// }

// function validateComplaintDescription(checkedReasons) {
//     const length = complaintDescription.value.length;
//     if (checkedReasons.includes("other")) {
//         return length >= 20;
//     }
//     return true//length === 0;
// }

// function validateDesiredSolution(desiredSolution) {
//     return desiredSolution.length !== 0;
// }

// function validateSolutionDescription(checkedSolutions) {
//     const length = solutionDescription.value.length
//     if (checkedSolutions.includes("other")) {
//         return length >= 20;
//     }
//     return true//length == 0;
// }

// // Get Value Functions
// function getCheckedReason() {
//     return Array.from(complaintReason)
//         .filter(i => i.checked)
//         .map(i => i.value);
// }

// function getDesiredSolution() {
//     return Array.from(desiredSolution)
//         .filter(i => i.checked)
//         .map(i => i.value);
// }

// // Form
// function validateForm() {
//     let filledForm = {
//         'full-name': validateFullName(fullName),
//         'email': validateEmail(emailAddress),
//         'order-no': validateOrderNumber(orderNumber),
//         'product-code': validateProductCode(productCode),
//         'quantity': validateQuantity(productQuantity),
//         'complaints-group': validateComplaintsGroup(getCheckedReason()),
//         'complaint-description': validateComplaintDescription(getCheckedReason()),
//         'solutions-group': validateDesiredSolution(getDesiredSolution()),
//         'solution-description': validateSolutionDescription(getDesiredSolution())
//     }
//     return filledForm
// }

// function isValid(validatedForm) {
//     const arrayForm = Object.values(validatedForm)
//     console.log(validateForm())
//     console.log(getCheckedReason())
//     console.log("---isValid: "+arrayForm.every((val) => val == true)+"\n")
//     return arrayForm.every((val) => val == true)
// }

// // Change event
// form.addEventListener("change", (event) => {
//     var borderColor = validateForm()[event.target.id]? "green" : "red";
//     event.target.style.borderColor = borderColor
//     if(event.target.type == "checkbox" || event.target.type == "radio"){
//         borderColor = validateForm()[`${event.target.closest("fieldset").id}`]? "green" : "red"
//         event.target.closest("fieldset").style.borderColor = borderColor
//     }
// })

// // Helper function to set border color based on validation
// function setBorderColor(field, isValid) {
//     const borderColor = isValid ? "green" : "red";

//     if (NodeList.prototype.isPrototypeOf(field)) {
//         field.forEach((element) => {
//             element.closest("fieldset").style.borderColor = borderColor;
//         });
//     } else {
//         field.style.borderColor = borderColor;
//     }
// }


// // SUBMIT BUTTON #1
// form.addEventListener("submit", submit);

// function submit(){
//     const formValidationResults = validateForm();

//     if (isValid(formValidationResults)) {
//         document.getElementById("message-box").textContent = "validation passed";
//         form.submit();
//     } else {
//         setBorderColor(fullName, formValidationResults['full-name']);
//         setBorderColor(emailAddress, formValidationResults['email']);
//         setBorderColor(orderNumber, formValidationResults['order-no']);
//         setBorderColor(productCode, formValidationResults['product-code']);
//         setBorderColor(productQuantity, formValidationResults['quantity']);

//         setBorderColor(complaintReason, formValidationResults['complaints-group']);
//         setBorderColor(complaintDescription, formValidationResults['complaint-description']);
//         setBorderColor(desiredSolution, formValidationResults['solutions-group']);
//         setBorderColor(solutionDescription, formValidationResults['solution-description']);
//         document.getElementById("message-box").textContent = "validation failed";
//     }
// }