'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
    async create() {
        const { ctx } = this
        // 1. 数据校验
        ctx.validate({
            username: { type: 'string' },
            email: { type: 'email' },
            password: { type: 'string' },
        })
        // 2. 保存用户
        // 3. 生成token
        // 4. 发送响应
        ctx.body = 'hi, create12'
    }
}

module.exports = UserController
