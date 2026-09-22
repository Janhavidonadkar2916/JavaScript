// Get form element

let form = document.getElementById("registrationForm");

let message = document.getElementById("message");


// -------------------------
// FOCUS EVENT
// -------------------------

let inputs = document.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='url'], input[type='password']"
);


inputs.forEach(function(input) {

    input.addEventListener("focus", function() {

        input.classList.add("focus");

    });

});


// -------------------------
// CHANGE EVENT
// -------------------------

document.getElementById("day").addEventListener(
    "change",
    function() {

        message.style.color = "blue";

        message.innerHTML =
            "Birthday day selected: " + this.value;

    }
);


document.getElementById("month").addEventListener(
    "change",
    function() {

        message.style.color = "blue";

        message.innerHTML =
            "Birthday month selected: " + this.value;

    }
);


document.getElementById("year").addEventListener(
    "change",
    function() {

        message.style.color = "blue";

        message.innerHTML =
            "Birthday year selected: " + this.value;

    }
);


// -------------------------
// SUBMIT EVENT
// -------------------------

form.addEventListener("submit", function(event) {

    // Prevent page refresh

    event.preventDefault();


    // Access form values

    let firstname =
        document.getElementById("firstname").value.trim();

    let username =
        document.getElementById("username").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value;

    let repassword =
        document.getElementById("repassword").value;

    let terms =
        document.getElementById("terms").checked;


    // -------------------------
    // FIRST NAME
    // -------------------------

    if (firstname == "") {

        showError("Please enter your first name.");

        return;
    }


    // -------------------------
    // USERNAME
    // -------------------------

    if (username == "") {

        showError("Please enter your username.");

        return;
    }


    // -------------------------
    // EMAIL
    // -------------------------

    let emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


    if (email != "" && !emailPattern.test(email)) {

        showError("Please enter a valid email.");

        return;
    }


    // -------------------------
    // PASSWORD
    // -------------------------

    if (password == "") {

        showError("Please enter a password.");

        return;
    }


    if (password.length < 8) {

        showError(
            "Password must contain at least 8 characters."
        );

        return;
    }


    // Uppercase

    if (!/[A-Z]/.test(password)) {

        showError(
            "Password must contain an uppercase letter."
        );

        return;
    }


    // Lowercase

    if (!/[a-z]/.test(password)) {

        showError(
            "Password must contain a lowercase letter."
        );

        return;
    }


    // Number

    if (!/[0-9]/.test(password)) {

        showError(
            "Password must contain a number."
        );

        return;
    }


    // Special character

    if (!/[!@#$%^&*]/.test(password)) {

        showError(
            "Password must contain a special character."
        );

        return;
    }


    // -------------------------
    // RE-PASSWORD
    // -------------------------

    if (password != repassword) {

        showError(
            "Password and Re-password do not match."
        );

        return;
    }


    // -------------------------
    // TERMS
    // -------------------------

    if (!terms) {

        showError(
            "Please agree to the terms and conditions."
        );

        return;
    }


    // -------------------------
    // SUCCESS
    // -------------------------

    message.style.color = "green";

    message.innerHTML =
        "✅ Registration Successful!";

});


// -------------------------
// ERROR FUNCTION
// -------------------------

function showError(text) {

    message.style.color = "red";

    message.innerHTML = "❌ " + text;

}