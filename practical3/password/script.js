function showPassword(){

    let password=document.getElementById("password");

    if(password.type=="password"){

        password.type="text";

    }
    else{

        password.type="password";

    }

}

function login(){

    let id=document.getElementById("studentid").value;

    let username=document.getElementById("username").value;

    let password=document.getElementById("password").value;

    let message=document.getElementById("message");

    let upper=/[A-Z]/;

    let lower=/[a-z]/;

    let number=/[0-9]/;

    let special=/[!@#$%^&*]/;

    if(id==""){

        message.style.color="red";
        message.innerHTML="Enter Student ID";

    }

    else if(username==""){

        message.style.color="red";
        message.innerHTML="Enter Student Name";

    }

    else if(password.length<8){

        message.style.color="red";
        message.innerHTML="Password must contain at least 8 characters";

    }

    else if(!upper.test(password)){

        message.style.color="red";
        message.innerHTML="Password must contain one uppercase letter";

    }

    else if(!lower.test(password)){

        message.style.color="red";
        message.innerHTML="Password must contain one lowercase letter";

    }

    else if(!number.test(password)){

        message.style.color="red";
        message.innerHTML="Password must contain one number";

    }

    else if(!special.test(password)){

        message.style.color="red";
        message.innerHTML="Password must contain one special character";

    }

    else{

        message.style.color="green";
        message.innerHTML=" Login Successful";

    }

}