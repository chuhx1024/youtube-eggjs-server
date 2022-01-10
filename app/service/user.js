const Service = require('egg').Service

const jwt = require('jsonwebtoken')

class UserService extends Service {
    get User() {
        return this.app.model.User
    }

    findByUsername(username) {
        return this.User.findOne({
            username,
        })
    }

    findByEmail(email) {
        return this.User.findOne({
            email,
        }).select('+password')
    }

    async createUser(data) {
        data.password = this.ctx.helper.md5(data.password)
        const user = new this.User(data)
        await user.save() // 保存到数据库
        return user
    }

    createToken(data) {
        return jwt.sign(data, this.app.config.jwt.secret, {
            expiresIn: this.app.config.jwt.expiresIn,
        })
    }

    verifyToken(token) {
        return jwt.verify(token, this.app.config.jwt.secret)
    }

    updateUser(data) {
        console.log(this.ctx.user._id, 99)
        console.log(data, 99)
        return this.User.findByIdAndUpdate(this.ctx.user._id, data, {
            new: true, // 返回更新之后的数据
        })
    }

    async subscribe(userId, channelId) {
        // 1. 检查是否已经订阅
        const record = await this.app.model.Subscription.findOne({
            user: userId,
            channel: channelId,
        })
        const user = await this.app.model.User.findById(channelId)
        console.log(record, 3)
        // 2. 没有订阅 添加订阅
        if (!record) {
            await new this.app.model.Subscription({
                user: userId,
                channel: channelId,
            }).save()
        }

        // 被订阅的人 订阅次数加 1
        user.subscribesCount++
        await user.save()
        // 3. 返回被订阅用户信息
        return user
    }

}

module.exports = UserService
