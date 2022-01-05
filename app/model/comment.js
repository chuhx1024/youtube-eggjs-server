'use strict'
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema

    const commentSchema = new Schema({
        content: { type: String, require: true }, // 评论内容
        user: { type: mongoose.ObjectId, require: true, ref: 'User' }, // 评论用户
        video: { type: mongoose.ObjectId, require: true, ref: 'Video' }, // 评论视频
        createAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    })
    return mongoose.model('Comment', commentSchema)
}
