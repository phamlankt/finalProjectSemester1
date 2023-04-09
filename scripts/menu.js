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
        document.getElementById("main_content").style.setProperty("left", "38%");
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