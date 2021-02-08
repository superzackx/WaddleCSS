let strength = 0;
let validations = []; 

function validatePassword(e) {
    const password = e.target.value;
    validations = [
        (password.length > 5),
        (password.search(/[A-Z]/) > -1),
        (password.search(/[0-9]/) > -1),
    ]
    return validations; 
}