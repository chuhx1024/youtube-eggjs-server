'use strict'
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const UserSchema = new Schema({
        username: { type: String, required: true }, // 用户名称
        email: { type: String, required: true }, // 用户邮箱
        password: { type: String, select: false, required: true }, // 密码  select: false  表示 查询是不包含此字段 若要包含 需 this.User.findOne({ email }).select('+password')
        avatar: { type: String, select: false, required: true }, // 用户头像
        cover: { type: String, default: null }, // 封面
        channelDescription: { type: String, default: null }, // 频道描述 就是用户描述
        createAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },

    })
    return mongoose.model('User', UserSchema)
}
