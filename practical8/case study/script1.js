```javascript
// ------------------------------------
// DOM ACCESS
// ------------------------------------

let form = document.getElementById("gymForm");

let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");

let membership = document.getElementById("membership");
let fee = document.getElementById("fee");
let terms = document.getElementById("terms");
let message = document.getElementById("message");


// ------------------------------------
// REAL-TIME NAME VALIDATION
// INPUT EVENT
// ------------------------------------

nameInput.addEventListener("input", function () {

    let name = nameInput.value.trim();
    let nameError = document.getElementById("nameError");

    if (name == "") {

        nameError.style.color = "red";
        nameError.innerHTML = "Name is required.";

    }

    else if (name.length < 3) {

        nameError.style.color = "red";
        nameError.innerHTML =
            "Name must contain at least 3 characters.";

    }

    else {

        nameError.style.color = "green";
        nameError.innerHTML = "✓ Valid Name";

    }

});


// ------------------------------------
// REAL-TIME AGE VALIDATION
// INPUT EVENT
// ------------------------------------

ageInput.addEventListener("input", function () {

    let age = Number(ageInput.value);
    let ageError = document.getElementById("ageError");

    if (age < 16) {

        ageError.style.color = "red";
        ageError.innerHTML =
            "Minimum age for admission is 16.";

    }

    else {

        ageError.style.color = "green";
        ageError.innerHTML = "✓ Age Accepted";

    }

});


// ------------------------------------
// REAL-TIME PHONE VALIDATION
// INPUT EVENT
// ------------------------------------

phoneInput.addEventListener("input", function () {

    let phone = phoneInput.value;
    let phoneError = document.getElementById("phoneError");

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        phoneError.style.color = "red";
        phoneError.innerHTML =
            "Enter a valid 10 digit phone number.";

    }

    else {

        phoneError.style.color = "green";
        phoneError.innerHTML =
            "✓ Valid Phone Number";

    }

});


// ------------------------------------
// REAL-TIME EMAIL VALIDATION
// INPUT EVENT
// ------------------------------------

emailInput.addEventListener("input", function () {

    let email = emailInput.value;
    let emailError = document.getElementById("emailError");

    let emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) {

        emailError.style.color = "red";
        emailError.innerHTML =
            "Enter a valid email.";

    }

    else {

        emailError.style.color = "green";
        emailError.innerHTML =
            "✓ Valid Email";

    }

});


// ------------------------------------
// MEMBERSHIP CHANGE EVENT
// REAL-TIME FEE UPDATE
// ------------------------------------

membership.addEventListener("change", function () {

    let selectedFee = membership.value;

    let membershipError =
        document.getElementById("membershipError");

    fee.innerHTML = selectedFee || "0";

    if (selectedFee == "") {

        membershipError.style.color = "red";

        membershipError.innerHTML =
            "Please select a membership plan.";

    }

    else {

        membershipError.innerHTML = "";

    }

});


// ------------------------------------
// FITNESS GOAL CHANGE EVENT
// ------------------------------------

let goal = document.getElementById("goal");

goal.addEventListener("change", function () {

    if (goal.value != "") {

        message.style.color = "blue";

        message.innerHTML =
            "Fitness Goal Selected: " + goal.value;

    }

});


// ------------------------------------
// FOCUS EVENT
// ------------------------------------

let inputs =
    document.querySelectorAll("input, select");

inputs.forEach(function (input) {

    input.addEventListener("focus", function () {

        input.style.borderColor = "#1976d2";
        input.style.backgroundColor = "#f5faff";

    });

});


// ------------------------------------
// SUBMIT EVENT
// ------------------------------------

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name =
        nameInput.value.trim();

    let age =
        Number(ageInput.value);

    let phone =
        phoneInput.value;

    let email =
        emailInput.value;

    let selectedMembership =
        membership.value;


    // NAME VALIDATION

    if (name == "") {

        showError(
            "Please enter your name."
        );

        return;
    }


    // AGE VALIDATION

    if (age < 16) {

        showError(
            "You must be at least 16 years old."
        );

        return;
    }


    // PHONE VALIDATION

    if (!/^[0-9]{10}$/.test(phone)) {

        showError(
            "Please enter a valid 10 digit phone number."
        );

        return;
    }


    // EMAIL VALIDATION

    if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
            .test(email)
    ) {

        showError(
            "Please enter a valid email."
        );

        return;
    }


    // MEMBERSHIP VALIDATION

    if (selectedMembership == "") {

        showError(
            "Please select a membership plan."
        );

        return;
    }


    // TERMS VALIDATION

    if (!terms.checked) {

        showError(
            "Please accept the gym rules and terms."
        );

        return;
    }


    // SUCCESS

    message.style.color = "green";

    message.innerHTML =
        "🎉 Gym Admission Successful! Welcome " +
        name + "!";

});


// ------------------------------------
// ERROR FUNCTION
// ------------------------------------

function showError(text) {

    message.style.color = "red";

    message.innerHTML =
        "❌ " + text;

}
```
