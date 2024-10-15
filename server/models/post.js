const mogoose = require('mongoose')

const postSchema = new mogoose.Schema({
    title: String,
    summary: String,
    image: String,
    content: String,
    author: String,
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
})

const post = mogoose.model('Posts',postSchema);

module.exports = post;