function getValueFromInput(id){
    const usernameInput = document.getElementById(id);
    const username = usernameInput.value;
    return username;
}

document.getElementById('signIn-btn').addEventListener('click', ()=>{
    const username = getValueFromInput('username');
    const password = getValueFromInput('password');

    if(username==='admin' && password==='admin123'){
        alert('sign in successfully');
    }
    else{
         alert('Use default username and password.')
        return;
    }
})
