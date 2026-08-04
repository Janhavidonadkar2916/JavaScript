function validateVehicle(){

    let result = document.getElementById("result");

    try{

        let number = document.getElementById("vehicle").value.trim();

        if(number == ""){
            throw "Vehicle number cannot be empty.";
        }

        // Indian Vehicle Number Format
        let pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;

        if(pattern.test(number)){

            result.style.color = "green";
            result.innerHTML = "Valid Vehicle Registration Number";

        }

        else{

            throw "Invalid Vehicle Registration Number.";

        }

    }

    catch(error){

        result.style.color = "red";
        result.innerHTML = "Error: " + error;

    }

}