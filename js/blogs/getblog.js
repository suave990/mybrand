import { blogs } from './blogs.js'
import {user} from '../users/sign.js'
import {comments, addComment} from './comments.js'

Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
};

const urlParams = new URLSearchParams(location.search);

if (urlParams.get('id') === null) {
    window.location.assign('/blogs.html')
}

let blog = blogs.filter(each => each.id == urlParams.get('id'))[0]

blogTitle.innerText = blog.title
blogOwner.innerText = blog.owner.name

blogBody.innerHTML = blog.body

blogDate.innerText = (new Date(blog.date)).yyyymmdd()

blogLikes.innerText = blog.likes.length

if(user !== null){
    var includes = false
    let allIn = blogLikes.parentNode.querySelectorAll('*')
    if(blog.likes.includes(user.email)){
        includes = true
        allIn.forEach(val => {
            val.style.fill = 'var(--color-orange)'
            val.style.color = 'var(--color-orange)'
        });
    }
    blogLikes.parentNode.addEventListener('click', e => {
        if(includes){
            let index = blog.likes.indexOf(user.email)
            blog.likes.splice(index, 1)
            localStorage.setItem('blogs', JSON.stringify(blogs))
            allIn.forEach(val => {
                val.style.fill = 'var(--color-gray)'
                val.style.color = 'var(--color-gray)'
            });
            includes = false
        }
        else{
            blog.likes.push(user.email)
            localStorage.setItem('blogs', JSON.stringify(blogs))
            allIn.forEach(val => {
                val.style.fill = 'var(--color-orange)'
                val.style.color = 'var(--color-orange)'
            });
            includes = true
        }
        blogLikes.innerText = blog.likes.length
    })
    //console.log(blogLikes.parentNode)
}

blogComments.innerText = blog.comments.length



blogShares.innerText = blog.shares.length