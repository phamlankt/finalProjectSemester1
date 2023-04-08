// import ('./class_add_remove');

// click download app button to open download section
let download_app_button = document.getElementById('download_btn');
download_app_button.addEventListener('click', () => {
    removeCLassActive('home', 'active');
    addCLassActive('download', 'active');
})

function addCLassActive(classname, activename) {
    // let classItems = document.getElementsByClassName(classname);
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        console.log(item);
        item.classList.add(activename);
        // window.location.href = `/#${item.getAttribute('id')}`;

        let pathRoot = window.location.pathname;
        pathRoot = pathRoot.split('/');
        pathRoot = pathRoot[1];
        window.location.href = `/${pathRoot}/#${item.getAttribute('id')}`;
    }
}


function removeCLassActive(classname, activename) {
    // let classItems = document.getElementsByClassName(classname);
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        item.classList.remove(activename);
    }
}

