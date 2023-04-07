// click download app button to open download section
let download_app_button = document.getElementById('download_btn');
download_app_button.addEventListener('click', () => {
    removeCLassActive('home');
    addCLassActive('download');
})
