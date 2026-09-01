function performOperation(){

    let text = document.getElementById("inputText").value.trim();

    let operation = document.getElementById("operation").value;

    let result = document.getElementById("result");


    // Check for empty input

    if(text == ""){

        result.style.color = "red";

        result.innerHTML = "Please enter some text.";

        return;

    }


    // -------------------------------
    // 1. EMAIL VALIDATION
    // -------------------------------

    if(operation == "email"){

        let emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if(emailPattern.test(text)){

            result.style.color = "green";

            result.innerHTML =
            "✅ Valid Email Address";

        }

        else{

            result.style.color = "red";

            result.innerHTML =
            "❌ Invalid Email Address";

        }

    }


    // -------------------------------
    // 2. DATA EXTRACTION
    // -------------------------------

    else if(operation == "extract"){

        let emails =
        text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g);

        let numbers =
        text.match(/\d+/g);

        let words =
        text.match(/[A-Za-z]+/g);


        result.innerHTML = `

            <b>Extracted Emails:</b>
            ${emails ? emails.join(", ") : "None"}

            <br>

            <b>Extracted Numbers:</b>
            ${numbers ? numbers.join(", ") : "None"}

            <br>

            <b>Extracted Words:</b>
            ${words ? words.join(", ") : "None"}

        `;

    }


    // -------------------------------
    // 3. VOWEL DETECTION
    // -------------------------------

    else if(operation == "vowel"){

        let vowels =
        text.match(/[aeiou]/gi);

        let count =
        vowels ? vowels.length : 0;


        result.innerHTML = `

            <b>Vowels Found:</b>
            ${vowels ? vowels.join(", ") : "None"}

            <br>

            <b>Total Number of Vowels:</b>
            ${count}

        `;

    }


    // -------------------------------
    // 4. TEXT ANALYSIS
    // -------------------------------

    else if(operation == "analysis"){

        let characters = text.length;

        let words =
        text.split(/\s+/).filter(function(word){

            return word != "";

        });

        let vowels =
        text.match(/[aeiou]/gi);

        let vowelCount =
        vowels ? vowels.length : 0;

        let consonants =
        text.match(/[bcdfghjklmnpqrstvwxyz]/gi);

        let consonantCount =
        consonants ? consonants.length : 0;


        result.innerHTML = `

            <b>Text Analysis</b>

            <br>

            Characters:
            ${characters}

            <br>

            Words:
            ${words.length}

            <br>

            Vowels:
            ${vowelCount}

            <br>

            Consonants:
            ${consonantCount}

        `;

    }


    // -------------------------------
    // 5. REVERSE STRING
    // -------------------------------

    else if(operation == "reverse"){

        let reverse =
        text.split("").reverse().join("");

        result.innerHTML = `

            <b>Original String:</b>
            ${text}

            <br>

            <b>Reversed String:</b>
            ${reverse}

        `;

    }

}