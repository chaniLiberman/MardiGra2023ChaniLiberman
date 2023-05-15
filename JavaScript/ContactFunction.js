
function onSubClick(event) {
    event.preventDefault();
    let userInput = document.getElementById("inputName").value;
    let lNameInput = document.getElementById("inputLname").value;
    let emailInput = document.getElementById("inputEmail").value;
    let hasErrors = false;

    if (userInput == '') {
        error.innerHTML = 'Please Enter Name';
        error.style.color = 'red';
        hasErrors = true;
    } else if (userInput.length < 3) {
        error.innerHTML = 'Your name is too short!'
        error.style.color = 'red';
        hasErrors = true;
    } else {
        error.innerHTML = '';
    }


    if (lNameInput === '') {
        error1.innerHTML = 'Please Enter Last Name';
        error1.style.color = 'red';
        hasErrors = true;
    }
    else if (lNameInput.length < 3) {
        error1.innerHTML = 'Your last name is too short!'
        error1.style.color = 'red';
        hasErrors = true;
    }
    else {
        error1.innerHTML = '';
    }


    if (emailInput.indexOf("@") == -1 || emailInput.indexOf(".") == -1) {
        error2.innerHTML = 'Please enter valid email!';
        error2.style.color = 'red';
        hasErrors = true;
    }
    else {
        error2.innerHTML = '';
    }
    if (hasErrors == false) {
        document.getElementById("form").submit();
        alert("the form has been sent successfully Welcome to our community!!!");
    }
}
