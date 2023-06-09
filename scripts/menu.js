function openmenu(x) {
    var element = document.querySelector("#menu_bar_nav");
    var display = getComputedStyle(element).display;
    // console.log(display);

    if (display == "flex") {
        document.getElementById("menu_bar_nav").style.display = "none";
        document.getElementById("header").style.setProperty("left", "0%");
        document.getElementById("footer").style.setProperty("left", "0%");
        document.getElementById("main_content").style.setProperty("left", "23%");

    } else {
        document.getElementById("menu_bar_nav").style.display = "flex";
        document.getElementById("header").style.setProperty("left", "254px");
        document.getElementById("footer").style.setProperty("left", "15%");
        // document.getElementById("main_content").style.setProperty("left", "38%");
    }

}

function closemenu(x) {
    var element = document.querySelector("#menu_bar_nav");
    var display = getComputedStyle(element).display;
    // console.log(display);

    if (display == "flex") {
        document.getElementById("menu_bar_nav").style.display = "none";
        document.getElementById("header").style.setProperty("left", "0%");
        document.getElementById("footer").style.setProperty("left", "0%");
        document.getElementById("main_content").style.setProperty("left", "23%");
    }
}
// listen to event to open and close menu
window.addEventListener('click', function (e) {
    const currentActiveSection = document.querySelector("section.active");
    if (!currentActiveSection.getAttribute('class').includes('screenshots')) {
        document.querySelector('.wrapper_screenshot_imgs').style.display = 'none';
    }
    if (document.getElementById('menu_wrapper').contains(e.target)) {
        openmenu();

    } else {
        closemenu();
    }

});

// listen on event to click on each menu item
let menu_items = document.querySelectorAll('.menu_item');
for (const menu_item of menu_items) {
    menu_item.addEventListener('click', function (e) {
        let menu_item_name = menu_item.getAttribute('id').slice(menu_item.getAttribute('id').indexOf('_') + 1);
        let active_items = document.getElementsByClassName('active');
        let current_active_item_name = active_items[1].getAttribute('id').slice(active_items[1].getAttribute('id').indexOf('_') + 1);
        removeCLassActive(current_active_item_name, "active");
        addCLassActive(menu_item_name, "active");
        e.preventDefault();

    });

}


function addCLassActive(classname, activename) {
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        item.classList.add(activename);

    }
    let pathRoot = window.location.pathname;
    pathRoot = pathRoot.split('/');
    pathRoot = pathRoot[1];
    window.location.href = `${pathRoot ? `/${pathRoot}` : ''}/#${classname + '_ctn'}`;
    // window.location.replace(`${pathRoot ? `/${pathRoot}` : ''}/#${classname + '_ctn'}`);


}


function removeCLassActive(classname, activename) {
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        item.classList.remove(activename);
    }
}