// ------------------------------------
// DOM ACCESS
// ------------------------------------

let theme =
    document.getElementById("theme");

let saveBtn =
    document.getElementById("saveBtn");

let message =
    document.getElementById("message");


// ------------------------------------
// APPLY THEME FUNCTION
// ------------------------------------

function applyTheme(selectedTheme) {

    if (selectedTheme == "dark") {

        document.body.classList.add("dark");

    }

    else {

        document.body.classList.remove("dark");

    }

}


// ------------------------------------
// GET SAVED THEME
// ------------------------------------

let savedTheme =
    localStorage.getItem("theme");


// Check if theme exists

if (savedTheme != null) {

    theme.value = savedTheme;

    applyTheme(savedTheme);

}


// ------------------------------------
// CHANGE EVENT
// ------------------------------------

theme.addEventListener(
    "change",
    function() {

        let selectedTheme =
            theme.value;


        // ------------------------------
        // CLEAR PREFERENCE
        // ------------------------------

        if (selectedTheme == "clear") {


            // Remove from localStorage

            localStorage.removeItem(
                "theme"
            );


            // Remove from sessionStorage

            sessionStorage.removeItem(
                "theme"
            );


            // Apply light theme

            applyTheme("light");


            // Reset dropdown

            theme.value = "";


            // Display message

            message.style.color =
                "green";

            message.innerHTML =
                "✓ Preference cleared successfully.";


            return;

        }


        // ------------------------------
        // CHANGE THEME
        // ------------------------------

        if (selectedTheme != "") {

            applyTheme(selectedTheme);

            message.style.color =
                "blue";

            message.innerHTML =
                "Theme changed to " +
                selectedTheme;

        }

    }
);


// ------------------------------------
// SAVE BUTTON EVENT
// ------------------------------------

saveBtn.addEventListener(
    "click",
    function() {

        let selectedTheme =
            theme.value;


        // Check selection

        if (selectedTheme == "") {

            message.style.color =
                "red";

            message.innerHTML =
                "Please select a theme.";

            return;

        }


        // Do not save "clear"

        if (selectedTheme == "clear") {

            return;

        }


        // ------------------------------
        // LOCAL STORAGE
        // ------------------------------

        localStorage.setItem(
            "theme",
            selectedTheme
        );


        // ------------------------------
        // SESSION STORAGE
        // ------------------------------

        sessionStorage.setItem(
            "theme",
            selectedTheme
        );


        // ------------------------------
        // SUCCESS MESSAGE
        // ------------------------------

        message.style.color =
            "green";

        message.innerHTML =
            "✓ Theme preference saved!";

    }
);