function openmenu(x) {
    var element = document.querySelector("#menu_bar_nav");
    var display = getComputedStyle(element).display;
    console.log(display);

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
    console.log(display);

    if (display == "flex") {
        document.getElementById("menu_bar_nav").style.display = "none";
        document.getElementById("header").style.setProperty("left", "0%");
        document.getElementById("footer").style.setProperty("left", "0%");
        document.getElementById("main_content").style.setProperty("left", "23%");
    }
}

// window.addEventListener('click', function (e) {
//     if (document.getElementById('menu_wrapper').contains(e.target)) {
//         openmenu();

//     } else {
//         closemenu();
//     }
//     // this.removeEventListener(this,'click');

// });


// click download app button to open download section --- NOT WORKING
let download_app_button = document.getElementById('download_btn');
download_app_button.onclick = open_download_section();

function open_download_section() {
    var home_section = document.getElementById('home_ctn');
    var download_section = document.getElementById('download_ctn');
    if (download_section.style.display == 'none') {
        home_section.style.display = 'none';
        download_section.style.display = 'block';
    } else {
        download_section.style.display = 'none';
    }
}


let item_sections = document.getElementsByClassName("item");
let active_items = document.getElementsByClassName('active');


// Click li to display coresponding content---NOT WORKING
let list = document.querySelectorAll('#section_dot li');

for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
    list[i].addEventListener('click', (e) => {
        console.log(e.target.id);
    })
}


for (let item of item_sections) {
    let item_id = item.getAttribute('id');
    let item_name = item_id.slice(item_id.indexOf('_') + 1);
    // console.log(item_name);
    item.addEventListener("click", displayItem(item_name));
}

function displayItem(item_name) {
    console.log(item_name);
    // let items = document.getElementsByClassName(item_name);
    // for (let item of items) {
    //     item.setAttribute('class', 'active');
    //     // console.log(item);
    // }
}


function displayPreviousSibling() {
    for (let active_item of active_items) {
        if (active_item.previousElementSibling != null) {
            active_item.classList.remove('active');
            active_item.previousElementSibling.classList.add('active');
        }
    }
}

function displayNextSibling() {
    for (let active_item of active_items) {
        if (active_item.nextElementSibling != null) {
            active_item.classList.remove('active');
            active_item.nextElementSibling.classList.add('active');
        }
    }
}

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