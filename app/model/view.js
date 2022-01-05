'use strict'
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema

    const viewSchema = new Schema({
        user: { type: mongoose.ObjectId, require: true, ref: 'User' }, // 用户
        video: { type: mongoose.ObjectId, require: true, ref: 'Video' }, // 视频
        createAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    })

    return mongoose.model('View', viewSchema)
}
