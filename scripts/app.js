function openmenu(x) {
    var element = document.querySelector("#menu_bar_nav");
    var display = getComputedStyle(element).display;
    console.log(display);

    if (display == "flex") {
        // if (false) {
        document.getElementById("menu_bar_nav").style.display = "none";
        document.getElementById("header1").style.setProperty("left", "0%");
    } else {
        document.getElementById("menu_bar_nav").style.display = "flex";
        document.getElementById("header1").style.setProperty("left", "254px");
    }

}

