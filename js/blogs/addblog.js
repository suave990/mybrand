import { createRich, getRich } from "../richtext/richtext.js";
import { addBlog } from './blogs.js'

let user = localStorage.getItem('user')

if (user !== null) {
    user = JSON.parse(user)

    createRich('richtext')

    let form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        let body = getRich('richtext')

        let title = form.querySelector('input[name=title]')

        addBlog(title.value, {
            name: user.name,
            email: user.email
        }, body);

        window.location.assign('/dashboard/')
    })
}