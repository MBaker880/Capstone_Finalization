"use strict";

window.addEventListener("load", function() {
    document.getElementById("submitButton").onclick = verifyValues;
});

function verifyValues() {
    fName();
    lName();
    city();
    phone();
    email();
}

function fName(fName) {
    var fName = document.getElementById("fName");
    
    if (fName.validity.valueMissing) {
        fName.setCustomValidity("Please input your first name");
    } else {
        fName.setCustomValidity("");
    }
}

function lName(lName) {
    var lName = document.getElementById("lName");
    
    if (lName.validity.valueMissing) {
        lName.setCustomValidity("Please input your last name");
    } else {
        lName.setCustomValidity("");
    }
}

function city(city) {
    var city = document.getElementById("city");
    
    if (city.validity.valueMissing) {
        city.setCustomValidity("Please input your city");
    } else {
        city.setCustomValidity("");
    }
}

function phone(phoneNum) {
    var phoneNum = document.getElementById("phone");

    if (phoneNum.validity.valueMissing) {
        phoneNum.setCustomValidity("Please input your phone number.");
    } else {
        phoneNum.setCustomValidity("");
    }
}

function email(email) {
    var email = document.getElementById("email");
    
    if (email.validity.valueMissing) {
        email.setCustomValidity("Please input an email");
    } else {
        email.setCustomValidity("");
    }
}