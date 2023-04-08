// import ('./siblingDisplay.js');

// Detect  keyup and keydown event
document.onkeydown = function (evt) {
    if (evt.keyCode == 38) {
        // console.log("Key up");
        displayPreviousSibling();

    } else if (evt.keyCode == 40) {
        // console.log("Key down");
        displayNextSibling();
    }
}


function displayPreviousSibling() {
    let active_items = document.getElementsByClassName('active');
    for (let active_item of active_items) {
        if (active_item.previousElementSibling != null) {
            active_item.classList.remove('active');
            active_item.previousElementSibling.classList.add('active');

            let pathRoot = window.location.pathname;
            pathRoot = pathRoot.split('/');
            pathRoot = pathRoot[1];
            window.location.href = `/${pathRoot}/#${active_item.previousElementSibling.getAttribute('id')}`;

            // window.location.href = `/#${active_item.previousElementSibling.getAttribute('id')}`;
        }
    }
}

function displayNextSibling() {
    let active_items = document.getElementsByClassName('active');
    for (let active_item of active_items) {
        if (active_item.nextElementSibling != null) {
            active_item.classList.remove('active');
            active_item.nextElementSibling.classList.add('active');

            let pathRoot = window.location.pathname;
            pathRoot = pathRoot.split('/');
            pathRoot = pathRoot[1];
            window.location.href = `/${pathRoot}/#${active_item.nextElementSibling.getAttribute('id')}`;

            // window.location.href = `/#${active_item.nextElementSibling.getAttribute('id')}`;
        }
    }
}