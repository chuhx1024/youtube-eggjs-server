'use strict'
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema

    const likeSchema = new Schema({
        like: { type: Number, enum: [ 1, -1 ], require: true }, // 点赞状态  喜欢 1, 不喜欢 -1
        user: { type: mongoose.ObjectId, require: true, ref: 'User' }, // 点赞用户
        video: { type: mongoose.ObjectId, require: true, ref: 'Video' }, // 点赞视频
        createAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    })
    return mongoose.model('VideoLike', likeSchema)
}
