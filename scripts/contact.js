
// Section Contact
const contact_items = [
    {
        element_type: 'div',
        id: 'sending_result'
    },
    {
        element_type: 'div',
        class: 'warning',
        id: 'name_warning'
    },
    {
        element_type: 'div',
        class: 'warning',
        id: 'email_warning'
    },
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
        element_type: 'div',
        class: 'warning',
        id: 'message_warning'
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


let warning_items = document.querySelectorAll('.warning');

for (const warning_item of warning_items) {
    warning_item.style.display = 'block';
    warning_item.innerHTML = "Please fill in the " + warning_item.getAttribute('id').split('_', 1);
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
            let input_ctn = document.getElementById(item['id']).value;
            if (input_ctn == "") {
                // let warning_items = document.querySelectorAll('.warning');

                // for (const warning_item of warning_items) {
                //     warning_item.style.display = 'block';
                //     warning_item.innerHTML = "Please fill in the " + warning_item.getAttribute('id').split('_', 1);
                // }
                console.log(document.getElementById(item['id'] + '_warning'))
                document.getElementById(item['id'] + '_warning').style.color = 'red';
                return_code = false;
            }
        }
    }
    return return_code;
}

// Validate email from input - ONCHANGE event
let input_email = document.getElementById('email');
input_email.addEventListener('change', () => {
    let email_added = input_email.value;
    console.log('email validity: ' + checkEmailValidity(email_added))
    if (checkEmailValidity(email_added) == null) {
        document.getElementById('email_warning').style.color = 'red'
    }
})

// Send email button - CLICK event
document.getElementById('submit_btn').addEventListener('click', () => {
    document.getElementById('name_warning').style.color = "transparent";
    document.getElementById('message_warning').style.color = "transparent";
    document.getElementById('sending_result').innerHTML = '';
    if (checkEmailValidity(document.getElementById('email').value) == null) {
        document.getElementById('email_warning').style.color = "red";
        document.getElementById('email_warning').innerHTML = 'Please insert a valid email address'
    }
    else {
        document.getElementById('email_warning').style.color = "transparent";
    }
    if (checkRequired() && checkEmailValidity(document.getElementById('email').value) != null) {
        document.getElementById('sending_result').innerHTML = 'Thanks for contacting us! We will get back to you as soon as possible.';
        let username = document.getElementById('name').value;
        let email_address = document.getElementById('email').value;
        let phone_nr = document.getElementById('phone').value;
        localStorage.setItem("Name", username);
        localStorage.setItem("Email", email_address);
        localStorage.setItem("Phone Number", phone_nr);
    }

})