function performOperation() {

    let text = document.getElementById("text").value;

    let operation = document.getElementById("operation").value;

    let result = document.getElementById("result");


    if (text.trim() == "") {

        result.style.color = "red";

        result.innerHTML = "Please enter a string or paragraph.";

        return;
    }


    // Reverse String
    if (operation == "reverse") {

        let reverse = text.split("").reverse().join("");

        result.style.color = "black";

        result.innerHTML = `
            <b>Original String:</b>
            ${text}

            <br><br>

            <b>Reversed String:</b>
            ${reverse}
        `;
    }


    // Count Vowels
    else if (operation == "vowels") {

        let vowels = text.match(/[aeiou]/gi);

        let count = vowels ? vowels.length : 0;

        result.style.color = "black";

        result.innerHTML = `
            <b>Paragraph:</b>
            ${text}

            <br><br>

            <b>Vowels Found:</b>
            ${vowels ? vowels.join(", ") : "None"}

            <br>

            <b>Total Number of Vowels:</b>
            ${count}
        `;
    }

}