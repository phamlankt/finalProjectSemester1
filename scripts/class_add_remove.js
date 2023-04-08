function addCLassActive(classname, activename) {
    // let classItems = document.getElementsByClassName(classname);
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        item.classList.add(activename);
        // window.location.href = `/#${item.getAttribute('id')}`;

        let pathRoot = window.location.pathname;
        pathRoot = pathRoot.split('/');
        pathRoot = pathRoot[0];
        window.location.href = `${pathRoot ? `/${pathRoot}` : ''}/#${item.getAttribute('id')}`;
    }
}


function removeCLassActive(classname, activename) {
    // let classItems = document.getElementsByClassName(classname);
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        item.classList.remove(activename);
    }
}