const mongoose = require('mongoose');
const shortid = require('shortid')


const PostSchema = new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    user_id: String,
    text: String,
    created_at: Date,
    update_at: Date,
})


const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel;