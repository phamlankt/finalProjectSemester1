
const screenshots = document.querySelectorAll('.screenshot_imgs img');
const elNavs = document.querySelectorAll('.screenshots ul.screenshots_controls li');
const slider = document.querySelector('div.wrapper_screenshot_imgs');
screenshots[0].classList.add('scr_active');

elNavs[0].classList.add('scr_active');



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
            slider.style.transform = `translateX(-${i * (widthTransform)}px)`;
        }
       
    }
}

