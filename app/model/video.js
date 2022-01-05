'use strict'
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const videoSchema = new Schema({
        title: { type: String, require: true }, // 视频名称
        description: { type: String, require: true }, // 视频描述
        playUrl: { type: String, require: true }, // 视频地址
        cover: { type: String, require: true }, // 视频封面
        user: { type: mongoose.ObjectId, require: true, ref: 'User' }, // 所属用户
        createAt: { type: Date, default: Date.now },
        updateAt: { type: Date, default: Date.now },
    })

    return mongoose.model('Video', videoSchema)
}
