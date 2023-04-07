// Section feedback
let feedback_client_list = document.querySelectorAll('main #main_content section.feedback #fb_client_controls li');
for (let fb of feedback_client_list) {
    fb.addEventListener('click', (e) => {
        active_items = document.getElementsByClassName('fb_active');
        let current_active_class = active_items[1].getAttribute('id').slice(active_items[1].getAttribute('id').indexOf('_') + 1);
        let new_active_class = e.target.getAttribute('id').slice(e.target.getAttribute('id').indexOf('_') + 1);

        if (new_active_class != current_active_class) {
            removeCLassActive(current_active_class, 'fb_active');
            addCLassActive(new_active_class, 'fb_active');
            new_fb_div = document.querySelector('.client_fb .' + new_active_class);
            window.location.href = `/#${new_fb_div.getAttribute('id')}`;

        }
    })
}


// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener('click', (e) => {

//         active_items = document.getElementsByClassName('active');
//         let item_name = e.target.id.slice(e.target.id.indexOf('_') + 1);
//         let current_active_item = active_items[1].getAttribute('id').slice(active_items[1].getAttribute('id').indexOf('_') + 1);
//         // console.log("item_name: " + item_name);
//         // console.log("current_active_item: " + current_active_item);
//         if (item_name != current_active_item) {
//             removeCLassActive(current_active_item);
//             addCLassActive(item_name);
//         }
//     })
// }
