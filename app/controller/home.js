'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        const { ctx, app } = this
        const User = app.model.User
        await new User({
            username: 'xiaoming',
            password: '123',
            email: '123@163.com',
            avatar: 'https://c-ssl.duitang.com/uploads/item/201802/19/20180219153248_ccfro.jpg',
        }).save()
        ctx.body = 'hi, egg123'
    }
}

module.exports = HomeController
