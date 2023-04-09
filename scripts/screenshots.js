

const screenshots = document.querySelectorAll('.screenshot_imgs img');
const elNavs = document.querySelectorAll('.screenshots ul.screenshots_controls li');
screenshots[0].classList.add('scr_active');
elNavs[0].classList.add('scr_active');


const checkLastActive = () => {
    for (let i = 0; i < screenshots.length; i++) {
        if (screenshots[i].classList.contains('scr_active')) {
            screenshots[i].classList.remove('scr_active');
            elNavs[i].classList.remove('scr_active');
            if (i === screenshots.length - 1) {
                screenshots[0].classList.add('scr_active');
                elNavs[0].classList.add('scr_active');
                return true;
            } else {
                screenshots[i + 1].classList.add('scr_active');
                elNavs[i + 1].classList.add('scr_active');
                return false;
            }
        }
    }
}

const slider = document.querySelector('div.wrapper_screenshot_imgs');

const changeSLide = () => {
    // const currentActiveSection = document.querySelector("section.active");
    // if (currentActiveSection) {
    // console.log(currentActiveSection);

    if (currentActiveSection.classList.contains('screenshots')) {
        document.querySelector('.wrapper_screenshot_imgs').style.display = 'flex';
        if (slider) {
            const widthTransform = Number(slider.offsetWidth);

            if (checkLastActive()) slider.style.transform = `translateX(0px)`;

            else {
                slider.style.transform = `translateX(-${Number(slider.style.transform.replace(/[^\d.]/g, '')) + widthTransform}px)`;

            }
        }
    }
    // }
}

// let interval = setInterval(() => {
//     changeSLide()
// }, 3000);

for (let i = 0; i < screenshots.length; i++) {
    elNavs[i].onclick = () => {
        document.querySelector('.wrapper_screenshot_imgs').style.display = 'flex';
        for (let j = 0; j < screenshots.length; j++) {
            screenshots[j].classList.remove('scr_active');
            elNavs[j].classList.remove('scr_active');
        }
        screenshots[i].classList.add('scr_active');
        elNavs[i].classList.add('scr_active');
        if (i == 0) slider.style.transform = `translateX(0px)`;
        else {
            const widthTransform = Number(slider.offsetWidth);
            // console.log(widthTransform);
            slider.style.transform = `translateX(-${i * (widthTransform)}px)`;
        }

        // clearInterval(interval);
        // interval = setInterval(() => {
        //     changeSLide()
        // }, 3000)
    }
}