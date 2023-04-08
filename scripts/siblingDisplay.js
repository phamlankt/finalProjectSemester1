function displayPreviousSibling() {
    active_items = document.getElementsByClassName('active');
    for (let active_item of active_items) {
        if (active_item.previousElementSibling != null) {
            active_item.classList.remove('active');
            active_item.previousElementSibling.classList.add('active');
            // window.location.href = `/#${active_item.previousElementSibling.getAttribute('id')}`;

            let pathRoot = window.location.pathname;
            pathRoot = pathRoot.split('/');
            pathRoot = pathRoot[1];
            window.location.href = `${pathRoot ? `/${pathRoot}` : ''}/#${active_item.previousElementSibling.getAttribute('id')}`;
        }
    }
}

function displayNextSibling() {
    active_items = document.getElementsByClassName('active');
    for (let active_item of active_items) {
        if (active_item.nextElementSibling != null) {
            active_item.classList.remove('active');
            active_item.nextElementSibling.classList.add('active');
            // window.location.href = `/#${active_item.nextElementSibling.getAttribute('id')}`;

            let pathRoot = window.location.pathname;
            pathRoot = pathRoot.split('/');
            pathRoot = pathRoot[1];
            window.location.href = `${pathRoot ? `/${pathRoot}` : ''}/#${active_item.nextElementSibling.getAttribute('id')}`;
        }
    }
}