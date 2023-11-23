const parentNameInput = document.querySelector("#parent_name");
const parentEmail = document.querySelector("#parent_email");
const parentPhoneInput = document.querySelector("#parent_phone_number");
const childFirstName = document.querySelector("#child_name");
const childLastName = document.querySelector("#child_last_name");
const childBirthplace = document.querySelector("#child_birthplace");
const courseInput = document.querySelector("#course_input");

const childBirthdate = document.querySelector("#child_birthdate");


const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function clearError(){
    for(let i = 0; i<errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    parentNameInput.classList.remove("error-border");
    parentEmail.classList.remove("error-border");
    parentPhoneInput.classList.remove("error-border");
    childFirstName.classList.remove("error-border");
    childLastName.classList.remove("error-border");
    childBirthplace.classList.remove("error-border");
    courseInput.classList.remove("error-border");
    childBirthdate.classList.remove("error-border");
}

function validEmail(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function validateForm(){
    
    console.log(childBirthdate.value);
    clearError();
    let errorFlag = false;

    if(parentNameInput.value.length < 1){
        errorNodes[0].innerText = "Please enter your name";
        parentNameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(childFirstName.value.length < 1){
        errorNodes[1].innerText = "Please enter your name";
        childFirstName.classList.add("error-border");
        errorFlag = true;
    }

    if(childLastName.value.length < 1){
        errorNodes[2].innerText = "Please enter your name";
        childLastName.classList.add("error-border");
        errorFlag = true;
    }

    if(!validEmail(parentEmail.value)){
        errorNodes[3].innerText = "Your E-mail address is invalid";
        parentEmail.classList.add("error-border");
        errorFlag = true;
    }

    if(parentPhoneInput.value.length < 11){
        errorNodes[4].innerText = "Your phone number is invalid";
        parentPhoneInput.classList.add("error-border");
        errorFlag = true;
    }

    if(childBirthdate.value < '1900-00-00'){
        errorNodes[5].innerText = "Child birth date is invalid";
        childBirthdate.classList.add("error-border");
        errorFlag = true;
    }

    if(childBirthplace.value.length < 5) {
        errorNodes[6].innerText = "Child Birthplace is invalid (5 chars)";
        childBirthplace.classList.add("error-border");
        errorFlag = true;
    }

    if(courseInput.value == -1) {
        errorNodes[7].innerText = "Please select a course!";
        courseInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Registered!";
    }
}