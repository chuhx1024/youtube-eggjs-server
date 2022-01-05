'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        const { ctx, app } = this
        const User = app.model.User
        await new User({
            userName: 'xiaoming',
            password: '123',
        }).save()
        ctx.body = 'hi, egg123'
    }
}

module.exports = HomeController
