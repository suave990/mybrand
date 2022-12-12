export default class Comment {
    constructor({name = undefined, email = undefined}, body = undefined) {
        this.id = newId(comments)
        this.owner = {
            name,
            email,
        }
        this.body = body
        this.likes = []
        this.unlikes = []
        this.replies = []
    }
}

export let comments = []
if (localStorage.getItem('comments') === null) {
    // something
}


const newId = function (val) {
    if(val.length === 0){
        val = 0
    }
    else{
        val = Number(val[val.length - 1].id) + 1
    }
    val = (val + '').split('')
    return [...('000000'.split('').slice(val.length)), ...val].join('')
}

export function addComment({name = undefined, email = undefined}, body = undefined) {
    const a = new Comment({name, email}, body)
    comments.push(a)
    localStorage.setItem('comments', JSON.stringify(comments))
    return {
        success: true,
        action: 'success',
        message: 'success',
        data: 'success',
        value: a
    }
}