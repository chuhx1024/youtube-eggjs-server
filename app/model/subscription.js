'use strict'
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema

    const subscriptionSchema = new Schema({
        user: { type: mongoose.ObjectId, require: true, ref: 'User' }, // 订阅用户
        channel: { type: mongoose.ObjectId, require: true, ref: 'User' }, // 订阅频道
        createAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    })

    return mongoose.model('Subscription', subscriptionSchema)
}
