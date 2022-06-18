const form = document.getElementById("form");
const username = document.getElementById("Username");
const Email = document.getElementById("Email");
const Password = document.getElementById("Enter Password");
const password2 = document.getElementById("Password2");

form.addEventListener('submit',e =>{

    e.preventDefault();
    checkInput();
});
function checkInput(){
    const usernameValue = username.value.trim();
    const EmailValue = Email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        SetError(username, 'username Cannot Be Blank ');

    }
    else{
        setSuccess(username)
    }
    if(EmailValue === ''){
        SetError(Email, 'Email Cannot Be Blank ');

    }
    else if(!isEmail(EmailValue))
    {
        SetError(Email,'Not a Valid Email');
    }
    else{
        setSuccess(Email);
    }
    
    if(PasswordValue === '')
    {
        SetError(Password, 'Password Cannot Be Blank ');

    }
    else{
        setSuccess(Password);
    }
    
    if(Password2Value === '')
    {
        SetError(Password, 'Password Cannot Be Blank ');

    }
    else if(passwordValue == password2Value){
        SetError(password2,'password does not match')
    }
    else{
        setSuccess(Password);
    }
     
   
     function SetError(input, message){
        const formControl = input.parentElement;
        const small = formControl.queryselecter('small');
        formControl.className ='form-control error';
        small.innerText = message;
     }
}
