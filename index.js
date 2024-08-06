const root = document.documentElement;


/*
*  [appearance]
*  toggle dark mode
*/
let darkMode = true
document.getElementById('button-theme').addEventListener('click', ()=>{
    if(darkMode){
        root.style.setProperty('--icon-theme', 'url(assets/light.svg)');
        root.style.setProperty('--bg-color', '#f5deb3');
        root.style.setProperty('--txt-color', '#3e3e3e');
        // root.style.setProperty('--bg-subcolor', '#f5deb3');
    } else{
        root.style.setProperty('--icon-theme', 'url(assets/dark.svg)');
        root.style.setProperty('--bg-color', '#3c3c3c');
        root.style.setProperty('--txt-color', '#f3f3f3');
    }
    darkMode = !darkMode;
});
