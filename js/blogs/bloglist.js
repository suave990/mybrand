import { blogs } from "./blogs.js";

Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
};

function display(blog) {
    let a = document.createElement('a')
    a.setAttribute('href', `/blog.html?id=${blog.id}`)

    let box = document.createElement('div')
    box.setAttribute('class', 'blogItem')

    let div = document.createElement('div')
    div.setAttribute('class', 'content')

    let head = document.createElement('h2')
    head.innerText = blog.title
    div.append(head)

    let body = document.createElement('div')
    body.setAttribute('class', 'body')
    body.innerHTML = blog.body
    div.append(body)

    let more = document.createElement('u')
    more.innerText = 'Read More'
    div.append(more)

    box.append(div)
    a.append(box)
    return a
}


let list = document.querySelector('.blogList')

for (let one of blogs) {
    list.append(display(one))
}