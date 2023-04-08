let item_sections = document.getElementsByClassName("item");
let active_items = document.getElementsByClassName('active');


// import ('./class_add_remove.js');

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
            removeCLassActive(current_active_item, 'active');
            addCLassActive(item_name, 'active');
        }
    })
}

function addCLassActive(classname, activename) {
    // let classItems = document.getElementsByClassName(classname);
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        item.classList.add(activename);

        let pathRoot = window.location.pathname;
        pathRoot = pathRoot.split('/');
        pathRoot = pathRoot[1];
        window.location.href = `${pathRoot ? `/${pathRoot}` : ''}/#${item.getAttribute('id')}`;


        // window.location.href = `/#${item.getAttribute('id')}`;
    }
}


function removeCLassActive(classname, activename) {
    // let classItems = document.getElementsByClassName(classname);
    let classItems = document.querySelectorAll('.' + classname);
    for (let item of classItems) {
        item.classList.remove(activename);
    }
}