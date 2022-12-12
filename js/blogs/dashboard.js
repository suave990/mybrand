import {blogs, deleteBlog} from './blogs.js'

let list = document.querySelector('.list.blog ul')

let editSvg = 
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M23.167 5.8002C23.6598 5.3127 23.6598 4.5002 23.167 4.0377L20.2104 1.1127C19.7429 0.625195 18.9217 0.625195 18.4289 1.1127L16.1041 3.4002L20.8422 8.0877M0.790527 18.5627V23.2502H5.52863L19.5029 9.4127L14.7648 4.7252L0.790527 18.5627Z"
            fill="#1D1D20" />
    </svg>`;

let deleteSvg = 
    `<svg width="19" height="24" viewBox="0 0 19 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M18.6217 2H14.1994L12.9359 0.75H6.61846L5.35497 2H0.932739V4.5H18.6217M2.19623 20.75C2.19623 21.413 2.46247 22.0489 2.93637 22.5178C3.41027 22.9866 4.05302 23.25 4.72322 23.25H14.8312C15.5014 23.25 16.1441 22.9866 16.618 22.5178C17.0919 22.0489 17.3582 21.413 17.3582 20.75V5.75H2.19623V20.75Z"
        fill="#1D1D20" />
    </svg>`;

blogs.forEach(blog => {
    let li = document.createElement('li')

    let title = document.createElement('a')
    title.setAttribute('href', `/blog.html?id=${blog.id}`)
    title.innerHTML = `<h1>${blog.title}</h1>`
    li.append(title)

    let div = document.createElement('div')
    div.classList.add('flex-between')

    let span = document.createElement('span')
    span.classList.add('grey-color')
    span.innerText = blog.owner.name
    div.append(span)

    let event = document.createElement('span')

    let edit = document.createElement('a')
    edit.setAttribute('href', `/dashboard/editblog.html?id=${blog.id}`)
    edit.innerHTML = editSvg
    event.append(edit)

    let del = document.createElement('a')
    // del.setAttribute('href', ``)
    del.innerHTML = deleteSvg
    del.addEventListener('click', e => {
        deleteBlog(blog)
        li.remove()
    })
    event.append(del)

    div.append(event)
    li.append(div)

    list.append(li)
})
