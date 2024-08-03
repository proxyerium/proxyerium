const root = document.documentElement;
let darkMode = true

const buttonTheme = document.querySelector('#button-theme');

buttonTheme.addEventListener('click', ()=>{
    if(darkMode){
        root.style.setProperty('--bg-color', '#f5deb3');
        root.style.setProperty('--txt-color', '#999999');
    } else{
        root.style.setProperty('--bg-color', '#3c3c3c');
        root.style.setProperty('--txt-color', '#f0f8ff');
    }
    darkMode = !darkMode;
});
