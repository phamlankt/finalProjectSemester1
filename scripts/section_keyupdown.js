// import ('./siblingDisplay.js');

// Detect  keyup and keydown event
document.onkeydown = function (evt) {
    let currentActiveItem = document.querySelector('section.active');
    if (evt.keyCode == 38) {
        // console.log("Key up");
        displayPreviousSibling();

    } else if (evt.keyCode == 40) {
        // console.log("Key down");
        displayNextSibling();
    } else if (evt.keyCode == 37) {

        if (currentActiveItem.getAttribute('class').includes('screenshots')) {
            // console.log("Key left");
            displayPreviousScreenshot();
        }

    } else if (evt.keyCode == 39) {
        if (currentActiveItem.getAttribute('class').includes('screenshots')) {
            // console.log("Key right");
            displayNextScreenshot();
        }
    }
}

const slider = document.querySelector('div.wrapper_screenshot_imgs');
function displayNextScreenshot() {
    document.querySelector('.wrapper_screenshot_imgs').style.display = 'flex';
    let currentActiveScreenshots = document.querySelectorAll('.scr_active');
    for (let active_screenshot of currentActiveScreenshots) {
        // console.log(active_screenshot.tagName.toLowerCase());
        active_screenshot.classList.remove('scr_active');
        if (active_screenshot.tagName.toLowerCase() == 'li') {
            if (active_screenshot.nextElementSibling) {
                // console.log(active_screenshot.nextElementSibling);
                active_screenshot.nextElementSibling.classList.add('scr_active');
            } else {
                document.querySelector('.screenshots_controls li:nth-child(1)').classList.add('scr_active');
            }
        } else if (active_screenshot.tagName.toLowerCase() == 'img') {
            if (active_screenshot.parentElement.nextElementSibling) {
                // console.log(active_screenshot.parentElement.nextElementSibling.childNodes[0]);
                active_screenshot.parentElement.nextElementSibling.childNodes[0].classList.add('scr_active');
            } else {
                document.querySelector('.wrapper_screenshot_imgs div:nth-child(1) img').classList.add('scr_active');
            }
        }

    }
    let index_screenshot = Number(currentActiveScreenshots[1].getAttribute('id').replace('screenshot', ''));
    // console.log('index_screenshot:' + index_screenshot);
    if (index_screenshot == 4) slider.style.transform = `translateX(0px)`;
    else {

        const widthTransform = Number(slider.offsetWidth);
        slider.style.transform = `translateX(-${index_screenshot * (widthTransform)}px)`;
    }
}

function displayPreviousScreenshot() {
    document.querySelector('.wrapper_screenshot_imgs').style.display = 'flex';
    let currentActiveScreenshots = document.querySelectorAll('.scr_active');
    for (let active_screenshot of currentActiveScreenshots) {
        active_screenshot.classList.remove('scr_active');
        if (active_screenshot.tagName.toLowerCase() == 'li') {
            if (active_screenshot.previousElementSibling) {
                active_screenshot.previousElementSibling.classList.add('scr_active');
            } else {
                document.querySelector('.screenshots_controls li:nth-child(4)').classList.add('scr_active');
            }
        } else if (active_screenshot.tagName.toLowerCase() == 'img') {
            if (active_screenshot.parentElement.previousElementSibling) {
                active_screenshot.parentElement.previousElementSibling.childNodes[0].classList.add('scr_active');
            } else {
                document.querySelector('.wrapper_screenshot_imgs div:nth-child(4) img').classList.add('scr_active');
            }
        }

    }
    let index_screenshot = Number(currentActiveScreenshots[1].getAttribute('id').replace('screenshot', ''));
    console.log('index_screenshot:' + index_screenshot);
    if (index_screenshot == 1) {
        // slider.style.transform = `translateX(0px)`;
        const widthTransform = Number(slider.offsetWidth);
        slider.style.transform = `translateX(-${3 * (widthTransform)}px)`;
    }
    else {

        const widthTransform = Number(slider.offsetWidth);
        console.log('widthTransform' + widthTransform);
        slider.style.transform = `translateX(-${(index_screenshot - 2) * (widthTransform)}px)`;
    }
}

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

            // window.location.href = `/#${active_item.previousElementSibling.getAttribute('id')}`;
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

            // window.location.href = `/#${active_item.nextElementSibling.getAttribute('id')}`;
        }
    }
}