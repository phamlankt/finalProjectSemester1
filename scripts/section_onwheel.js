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

// let listSection = document.querySelectorAll('main #main_content section');
// window.addEventListener("wheel", event => {
//     let indexActive
//     for (let i = 0; i < listSection.length; i++) {
//         if (listSection[i].className.includes('active')) {
//             indexActive = i;
//             break
//         }
//     }

//     const handleTranform = (index) => {
//         listSection[indexActive].classList.toggle('active')
//         const sectionActive = listSection[index]
//         sectionActive.classList.toggle('active')
//         window.location.href = `/#${sectionActive.getAttribute('id')}`
//     }

//     if (event.deltaY > 0) {
//         if (indexActive === listSection.length - 1) return
//         else {
//             handleTranform(indexActive + 1)
//         }
//     } else if (event.deltaY < 0) {
//         if (indexActive === 0) return
//         else {
//             handleTranform(indexActive - 1)
//         }
//     }
// })

function displayPreviousSibling() {
    let active_items = document.getElementsByClassName('active');
    for (let active_item of active_items) {
        if (active_item.previousElementSibling != null) {
            active_item.classList.remove('active');
            active_item.previousElementSibling.classList.add('active');
            window.location.href = `/#${active_item.previousElementSibling.getAttribute('id')}`;
        }
    }
}

function displayNextSibling() {
    let active_items = document.getElementsByClassName('active');
    for (let active_item of active_items) {
        if (active_item.nextElementSibling != null) {
            active_item.classList.remove('active');
            active_item.nextElementSibling.classList.add('active');
            window.location.href = `/#${active_item.nextElementSibling.getAttribute('id')}`;
        }
    }
}