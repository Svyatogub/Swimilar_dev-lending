let nameValid = document.getElementById("nameInput");
let surnameValid = document.getElementById("surnameInput");
let phoneValid = document.getElementById("phoneInput");
let emailValid = document.getElementById("emailInput")


function validateEmail() {
    if(!emailValid.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
        emailValid.style.color = "red"
        emailValid.style.borderBottom = "1px solid red"
        return false
    }
    emailValid.style.color = "black"
    emailValid.style.borderBottom = "1px solid #D9D9D9"
    return true    
}
function validateName() {
    if(!nameValid.value.match(/^[a-zA-Zа-яА-Я]{2,30}$/)) {
        nameValid.style.color = "red"
        nameValid.style.borderBottom = "1px solid red"
        return false
    }
    nameValid.style.color = "black"
    nameValid.style.borderBottom = "1px solid #D9D9D9"
    return true    
}
function validateSurname() {
    if(!surnameValid.value.match(/^[a-zA-Zа-яА-Я]{2,30}$/)) {
        surnameValid.style.color = "red"
        surnameValid.style.borderBottom = "1px solid red"
        return false
    }
    surnameValid.style.color = "black"
    surnameValid.style.borderBottom = "1px solid #D9D9D9"
    return true    
}
function validatePhone() {
    if (!phoneValid.value.match(/^\+[0-9]{12}/)) {
        phoneValid.style.color = "red"
        phoneValid.style.borderBottom = "1px solid red"
        return false
    }
    phoneValid.style.color = "black"
    phoneValid.style.borderBottom = "1px solid #D9D9D9"
    return true
}

