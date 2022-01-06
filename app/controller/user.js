'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
    async create() {
        const { ctx } = this
        // 获取请求体
        const body = ctx.request.body
        // 1. 数据校验
        ctx.validate({
            username: { type: 'string' },
            email: { type: 'email' },
            password: { type: 'string' },
        })

        if (await this.service.user.findByUsername(body.username)) {
            ctx.throw(422, '用户已存在!')
        }
        if (await this.service.user.findByEmail(body.email)) {
            ctx.throw(422, '邮箱已存在!')
        }
        // 2. 保存用户

        const user = await this.service.user.createUser(body)

        // 3. 生成token
        // 4. 发送响应
        ctx.body = user
    }
}

module.exports = UserController
