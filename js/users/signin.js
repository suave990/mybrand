import User, { users, find } from "./user.js";
import validEmail from "../valid/email.js";

const SignForm = document.querySelector('form[name=signin]')

const email = SignForm.querySelector('input[name=email]')
const password = SignForm.querySelector('input[name=password]')
const submit = SignForm.querySelector('button[type=submit]')

SignForm.addEventListener('submit', e => {
    e.preventDefault()
    if (validEmail(email.value) === null) {
        email.style.outline = '1px solid #fa0'
        const emailtimeout = setTimeout(() => {
            email.style.outline = 'none'
            clearTimeout(emailtimeout)
        }, 3000);
        email.focus()
        return
    }
    let user = find('email', email.value)
    if (!user || user.password !== password.value) {
        alert('email or password is incorrect')
        email.focus()
        return
    }

    localStorage.setItem('user', JSON.stringify(user))
    window.location.assign('/')
})