'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
    async create() {
        const { ctx } = this
        ctx.body = 'hi, create'
    }
}

module.exports = UserController
