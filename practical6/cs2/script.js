function analyzeText(){

    let text = document.getElementById("text").value.trim();

    let output = document.getElementById("output");


    if(text == ""){

        output.innerHTML = "Please enter a paragraph.";
        output.style.color = "red";

        return;
    }


    // Extract Student Name
    let nameMatch =
text.match(/name is\s+(.*?)\s+and\s+my\s+roll number/i);

let name = nameMatch ?
nameMatch[1].trim() :
"Not Found";


    // Extract Roll Number
    let rollMatch =
    text.match(/roll number is (\d+)/i);

    let roll = rollMatch ?
    rollMatch[1] :
    "Not Found";


    // Extract Email
    let emailMatch =
    text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);

    let email = emailMatch ?
    emailMatch[0] :
    "Not Found";


    // Extract Phone Number
    let phoneMatch =
    text.match(/\b\d{10}\b/);

    let phone = phoneMatch ?
    phoneMatch[0] :
    "Not Found";


    // Extract Department
    let departmentMatch =
    text.match(/(Computer Science|Information Technology|Mechanical Engineering|Civil Engineering|Electrical Engineering)/i);

    let department = departmentMatch ?
    departmentMatch[0] :
    "Not Found";


    // Email Validation

    let emailPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    let emailStatus;

    if(emailPattern.test(email)){

        emailStatus = "Valid Email";

    }
    else{

        emailStatus = "Invalid Email";

    }


    // Phone Validation

    let phonePattern = /^\d{10}$/;

    let phoneStatus;

    if(phonePattern.test(phone)){

        phoneStatus = "Valid Phone Number";

    }
    else{

        phoneStatus = "Invalid Phone Number";

    }


    // Count Words

    let words = text.split(/\s+/);

    let wordCount = words.length;


    // Count Characters Excluding Spaces

    let charactersWithoutSpaces =
    text.replace(/\s/g, "");

    let characterCount =
    charactersWithoutSpaces.length;


    // Convert Text to Lowercase

    let lowercaseText =
    text.toLowerCase();


    // Replace Computer Science

    let replacedText =
    text.replace(/Computer Science/gi,
                 "Information Technology");


    // Display Results

    output.style.color = "black";

    output.innerHTML = `

        <h3>Extracted Information</h3>

        <b>Student Name:</b> ${name}<br>

        <b>Roll Number:</b> ${roll}<br>

        <b>Email:</b> ${email}<br>

        <b>Email Status:</b> ${emailStatus}<br>

        <b>Phone Number:</b> ${phone}<br>

        <b>Phone Status:</b> ${phoneStatus}<br>

        <b>Department:</b> ${department}<br>

        <hr>

        <h3>Text Analysis</h3>

        <b>Total Words:</b> ${wordCount}<br>

        <b>Total Characters (excluding spaces):</b>
        ${characterCount}<br>

        <hr>

        <h3>Lowercase Text</h3>

        ${lowercaseText}

        <hr>

        <h3>After Department Replacement</h3>

        ${replacedText}

    `;

}