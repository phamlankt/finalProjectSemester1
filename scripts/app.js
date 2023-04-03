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
// listen to event to open and close menu
window.addEventListener('click', function (e) {
    if (document.getElementById('menu_wrapper').contains(e.target)) {
        openmenu();

    } else {
        closemenu();
    }

});


// click download app button to open download section
let download_app_button = document.getElementById('download_btn');
download_app_button.addEventListener('click', () => {
    removeCLassActive('home');
    addCLassActive('download');
})


let item_sections = document.getElementsByClassName("item");
let active_items = document.getElementsByClassName('active');


// Click li to display coresponding content
let list = document.querySelectorAll('#section_dot li');

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', (e) => {
        active_items = document.getElementsByClassName('active');
        let item_name = e.target.id.slice(e.target.id.indexOf('_') + 1);
        let current_active_item = active_items[1].getAttribute('id').slice(active_items[1].getAttribute('id').indexOf('_') + 1);
        // console.log("item_name: " + item_name);
        // console.log("current_active_item: " + current_active_item);
        if (item_name != current_active_item) {
            removeCLassActive(current_active_item);
            addCLassActive(item_name);
        }
    })
}

function addCLassActive(classname) {
    let classItems = document.getElementsByClassName(classname);
    for (let item of classItems) {
        item.classList.add('active');
    }
}


function removeCLassActive(classname) {
    let classItems = document.getElementsByClassName(classname);
    for (let item of classItems) {
        item.classList.remove('active');
    }
}

function displayPreviousSibling() {
    active_items = document.getElementsByClassName('active');
    for (let active_item of active_items) {
        if (active_item.previousElementSibling != null) {
            active_item.classList.remove('active');
            active_item.previousElementSibling.classList.add('active');
        }
    }
}

function displayNextSibling() {
    active_items = document.getElementsByClassName('active');
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

// Section about
let li_tags = document.querySelectorAll('section.about ul li.about_li');
for (let li_tag of li_tags) {
    li_tag.addEventListener('click', () => {
        let li_current_active = document.querySelectorAll('li.active_ctn');
        console.log(li_current_active);
        for (let current_active of li_current_active) {
            let about_current_active_name = current_active.getAttribute('id').slice(current_active.getAttribute('id').indexOf('_') + 1);
            document.getElementById('about_' + about_current_active_name + '_ctn').classList.remove('active_ctn');
            current_active.classList.remove('active_ctn');

        }
        li_tag.classList.add('active_ctn');
        let about_new_active_name = li_tag.getAttribute('id').slice(li_tag.getAttribute('id').indexOf('_') + 1);
        document.getElementById('about_' + about_new_active_name + '_ctn').classList.add('active_ctn');
    });

}