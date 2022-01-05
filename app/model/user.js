'use strict'
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const UserSchema = new Schema({
        username: { type: String, required: true }, // 用户名称
        email: { type: String, required: true }, // 用户邮箱
        password: { type: String, select: false, required: true }, // 密码
        avatar: { type: String, select: false, required: true }, // 用户头像
        cover: { type: String, default: null }, // 封面
        channelDescription: { type: String, default: null }, // 频道描述 就是用户描述
        createAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },

    })
    return mongoose.model('User', UserSchema)
}
