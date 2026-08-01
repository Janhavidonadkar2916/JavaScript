function checkPalindrome(){

    let result = document.getElementById("result");

    try{

        let text = document.getElementById("text").value.trim();

        if(text == ""){

            throw "Input cannot be empty.";

        }

        if(text.length < 3){

            throw "Word must be at least 3 characters long.";

        }

        let reverse = text.split("").reverse().join("");

        if(text.toLowerCase() == reverse.toLowerCase()){

            result.style.color = "green";
            result.innerHTML = " It is a Palindrome.";

        }

        else{

            result.style.color = "red";
            result.innerHTML = " It is Not a Palindrome.";

        }

    }

    catch(error){

        result.style.color = "orange";
        result.innerHTML = "Error: " + error;

    }

}