
// Section Contact
const contact_items = [
    {
        element_type: 'input',
        type: 'text',
        placeholder: 'Name',
        id: 'name',
        required: 'required'
    },
    {
        element_type: 'input',
        type: 'email',
        placeholder: 'Email',
        id: 'email',
        required: 'required'
    },
    {
        element_type: 'input',
        type: 'text',
        placeholder: 'Phone',
        id: 'phone'
    },
    {
        element_type: 'input',
        type: 'text',
        placeholder: 'Subject',
        id: 'subject'
    },
    {
        element_type: 'textarea',
        placeholder: 'Message',
        id: 'message',
        required: 'required'
    },
    {
        element_type: 'button',
        type: 'submit',
        id: 'submit_btn',
        innerText: 'Send'
    }
];


// render contact form
for (let item of contact_items) {

    let html_item = document.createElement(item.element_type);

    if (item.element_type == 'button') {
        html_item.innerText = item['innerText'];
    }
    for (let attr in item) {
        if (attr != 'element_type') {

            html_item.setAttribute(attr, item[attr]);
        }
        if (attr == 'required') {
            html_item.setAttribute(attr, "");
            html_item.setAttribute('placeholder', item['placeholder'] + '(*)')
        }
    }

    document.getElementById('contact_form').appendChild(html_item);
}

function checkEmailValidity(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function checkRequired() {
    let return_code = true;
    for (let item of contact_items) {
        if (item['required']) {
            console.log('require')
            let input_ctn = document.getElementById(item['id']).value;
            if (input_ctn == "") {
                return_code = false;
                break;
            }
        }
    }
    return return_code;
}

// Validate email from input - ONCHANGE event
let input_email = document.getElementById('email');
input_email.addEventListener('change', () => {
    let email_added = input_email.value;
    if (!checkEmailValidity(email_added)) {
        alert('Please insert a valid email address!')
    }
})

// Send email button - CLICK event
document.getElementById('submit_btn').addEventListener('click', () => {
    if (!checkRequired()) {
        alert('Please fill in the required fields!')
    } else {
        alert('Thanks for contacting us! We will get back to you as soon as possible.')
    }
})