function getValueFromInput(id){
    const usernameInput = document.getElementById(id);
    const username = usernameInput.value;
    return username;
}

document.getElementById('signIn-btn').addEventListener('click', ()=>{
    const username = getValueFromInput('username');
    const password = getValueFromInput('password');

    if(username==='admin' && password==='admin123'){
        window.location.assign('/home.html')
    }
    else{
         alert('Use default username and password.')
        return;
    }
})
