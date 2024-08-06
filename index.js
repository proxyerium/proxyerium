const root = document.documentElement;


/*
*  [theme]
*  toggle dark/light theme
*/
document.getElementById('button-theme').addEventListener('click', ()=>{
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const toggleTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', toggleTheme);
});
