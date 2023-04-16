const client_fbs = document.querySelectorAll('.feedback div.client_fb div');
const elNavs = document.querySelectorAll('.feedback ul.fb_client_controls li');
client_fbs[0].classList.add('fb_active');
elNavs[0].classList.add('fb_active');


const checkLastActive = () => {
    for (let i = 0; i < client_fbs.length; i++) {
        if (client_fbs[i].classList.contains('fb_active')) {
            client_fbs[i].classList.remove('fb_active');
            elNavs[i].classList.remove('fb_active');
            if (i === client_fbs.length - 1) {
                client_fbs[0].classList.add('fb_active');
                elNavs[0].classList.add('fb_active');
                return true;
            } else {
                client_fbs[i + 1].classList.add('fb_active');
                elNavs[i + 1].classList.add('fb_active');
                return false;
            }
        }
    }
}

const slider = document.querySelector('.feedback div.client_fb');

const changeSLide = () => {
    if (slider) {
        const widthTransform = Number(slider.offsetWidth);

        if (checkLastActive()) slider.style.transform = `translateX(0px)`;

        else {
            slider.style.transform = `translateX(-${Number(slider.style.transform.replace(/[^\d.]/g, '')) + widthTransform}px)`;

        }
    }
}

let interval = setInterval(() => {
    changeSLide()
}, 3000);

for (let i = 0; i < client_fbs.length; i++) {
    elNavs[i].onclick = () => {
        for (let j = 0; j < client_fbs.length; j++) {
            client_fbs[j].classList.remove('fb_active');
            elNavs[j].classList.remove('fb_active');
        }
        client_fbs[i].classList.add('fb_active');
        elNavs[i].classList.add('fb_active');
        if (i == 0) slider.style.transform = `translateX(0px)`;
        else {
            const widthTransform = Number(slider.offsetWidth);
            // console.log(widthTransform);
            slider.style.transform = `translateX(-${i * (widthTransform)}px)`
        }

        clearInterval(interval);
        interval = setInterval(() => {
            changeSLide()
        }, 3000)
    }
}