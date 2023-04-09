// import ('./siblingDisplay.js');

// Detect wheel event from mouse
window.addEventListener("wheel", event => {
    // console.log(event.deltaY);
    if (event.deltaY > 0) {
        // console.log("Wheel mouse down");
        displayNextSibling();
    } else if (event.deltaY < 0) {
        // console.log("Wheel mouse up");
        displayPreviousSibling();
    }
})


function displayPreviousSibling() {
    let active_items = document.getElementsByClassName('active');
    for (let active_item of active_items) {
        if (active_item.previousElementSibling != null) {
            if (!active_item.previousElementSibling.getAttribute('class').includes('screenshots')) {
                document.querySelector('.wrapper_screenshot_imgs').style.display = 'none';
            }

            active_item.classList.remove('active');
            active_item.previousElementSibling.classList.add('active');

            let pathRoot = window.location.pathname;
            pathRoot = pathRoot.split('/');
            pathRoot = pathRoot[1];
            window.location.href = `${pathRoot ? `/${pathRoot}` : ''}/#${active_item.previousElementSibling.getAttribute('id')}`;
        }
    }
}

function displayNextSibling() {
    let active_items = document.getElementsByClassName('active');
    for (let active_item of active_items) {
        if (active_item.nextElementSibling != null) {
            if (!active_item.nextElementSibling.getAttribute('class').includes('screenshots')) {
                document.querySelector('.wrapper_screenshot_imgs').style.display = 'none';
            }
            active_item.classList.remove('active');
            active_item.nextElementSibling.classList.add('active');

            let pathRoot = window.location.pathname;
            pathRoot = pathRoot.split('/');
            pathRoot = pathRoot[1];
            window.location.href = `${pathRoot ? `/${pathRoot}` : ''}/#${active_item.nextElementSibling.getAttribute('id')}`;
        }
    }
}