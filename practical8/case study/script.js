// Get form using DOM

let form = document.getElementById("gymForm");


// Get message area

let message = document.getElementById("message");


// --------------------------------
// FOCUS EVENT
// --------------------------------


// Get name and ability fields

let inputs = document.querySelectorAll(
    "#name, #ability"
);


// Add focus event

inputs.forEach(function(input) {

    input.addEventListener(
        "focus",
        function() {

            // DOM manipulation

            this.classList.add("focus");

            message.style.color = "blue";

            message.innerHTML =
                "You are filling the " +
                this.id +
                " field.";

        }
    );

});


// --------------------------------
// INPUT EVENT
// --------------------------------


// Real-time handling of name

document.getElementById("name")
.addEventListener(
    "input",
    function() {

        let name = this.value.trim();


        if (name == "") {

            message.style.color = "red";

            message.innerHTML =
                "Name cannot be empty.";

        }

        else {

            message.style.color = "green";

            message.innerHTML =
                "Name entered: " + name;

        }

    }
);


// --------------------------------
// CHANGE EVENT
// --------------------------------


// Eye color change event

document.getElementById("eyeColor")
.addEventListener(
    "change",
    function() {

        if (this.value != "") {

            message.style.color = "blue";

            message.innerHTML =
                "Eye color selected: " +
                this.value;

        }

    }
);


// Gender change event

let genders = document.querySelectorAll(
    "input[name='gender']"
);


genders.forEach(function(gender) {

    gender.addEventListener(
        "change",
        function() {

            message.style.color = "blue";

            message.innerHTML =
                "Gender selected: " +
                this.value;

        }
    );

});


// Height checkbox

document.getElementById("height")
.addEventListener(
    "change",
    function() {

        if (this.checked) {

            message.innerHTML =
                "Over 6 feet tall selected.";

        }

        else {

            message.innerHTML =
                "Over 6 feet tall removed.";

        }

    }
);


// Weight checkbox

document.getElementById("weight")
.addEventListener(
    "change",
    function() {

        if (this.checked) {

            message.innerHTML =
                "Over 200 pounds selected.";

        }

        else {

            message.innerHTML =
                "Over 200 pounds removed.";

        }

    }
);


// --------------------------------
// SUBMIT EVENT
// --------------------------------


form.addEventListener(
    "submit",
    function(event) {


        // Stop page refresh

        event.preventDefault();


        // Get name

        let name =
            document.getElementById("name")
            .value.trim();


        // Get selected gender

        let gender =
            document.querySelector(
                "input[name='gender']:checked"
            );


        // Get eye color

        let eyeColor =
            document.getElementById("eyeColor")
            .value;


        // Get athletic ability

        let ability =
            document.getElementById("ability")
            .value.trim();


        // --------------------------
        // NAME VALIDATION
        // --------------------------


        if (name == "") {

            showError(
                "Please enter your name."
            );

            return;

        }


        // --------------------------
        // GENDER VALIDATION
        // --------------------------


        if (!gender) {

            showError(
                "Please select your sex."
            );

            return;

        }


        // --------------------------
        // EYE COLOR VALIDATION
        // --------------------------


        if (eyeColor == "") {

            showError(
                "Please select your eye color."
            );

            return;

        }


        // --------------------------
        // ATHLETIC ABILITY
        // --------------------------


        if (ability == "") {

            showError(
                "Please describe your athletic ability."
            );

            return;

        }


        // --------------------------
        // SUCCESS MESSAGE
        // --------------------------


        message.style.color = "green";


        message.innerHTML =

            "Gym Admission Form Submitted Successfully!";


    }
);


// --------------------------------
// ERROR FUNCTION
// --------------------------------


function showError(text) {

    message.style.color = "red";

    message.innerHTML =
        "❌ " + text;

}