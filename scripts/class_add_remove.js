function addCLassActive(classname, activename) {
    // let classItems = document.getElementsByClassName(classname);
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        item.classList.add(activename);
        window.location.href = `/#${item.getAttribute('id')}`;
    }
}


function removeCLassActive(classname, activename) {
    // let classItems = document.getElementsByClassName(classname);
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        item.classList.remove(activename);
    }
}