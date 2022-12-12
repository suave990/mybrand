import Message, { addMessage } from "./message.js";
import validEmail from "../valid/email.js";

// let a = new Message('title', 'email', 'body')
// console.log(a)

const contactForm = document.querySelector('form[name=contactMe]')

const name = contactForm.querySelector('[name=name]')
const email = contactForm.querySelector('[name=email]')
const message = contactForm.querySelector('[name=message]')
const submit = contactForm.querySelector('[type=submit]')

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    if (name.value === '') {
        name.style.outline = '1px solid #f00'
        const nametimeout = setTimeout(() => {
            name.style.outline = 'none'
            clearTimeout(nametimeout)
        }, 3000);
        name.focus()
    }
    else if (validEmail(email.value) === null) {
        email.style.outline = '1px solid #f00'
        const emailtimeout = setTimeout(() => {
            email.style.outline = 'none'
            clearTimeout(emailtimeout)
        }, 3000);
        email.focus()
    }
    else if (message.value === '') {
        message.style.outline = '1px solid #f00'
        const messagetimeout = setTimeout(() => {
            message.style.outline = 'none'
            clearTimeout(messagetimeout)
        }, 3000);
        message.focus()
    }
    else {
        let a = addMessage('name', 'email', 'body')
        console.log(a)
    }
})