// Section about
let li_tags = document.querySelectorAll('section.about ul li.about_li');
// console.log(li_tags);
for (let i = 0; i < li_tags.length; i++) {
    let li_tag = li_tags[i];
    li_tag.addEventListener('click', () => {
        let shiftedOffset = i * 25;
        document.getElementById("underscore_line").style.left = shiftedOffset + '%';
        let li_current_active = document.querySelectorAll('li.active_ctn');
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