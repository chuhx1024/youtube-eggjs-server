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
        const token = this.service.user.createToken({
            userId: user._id,
        })
        // 4. 发送响应
        ctx.body = {
            code: 200,
            data: {
                email: user.email,
                token,
                username: user.username,
                avatar: user.avatar,
            },
            msg: '注册成功',
        }
    }
    async login() {
        const { ctx } = this
        // 获取请求体
        const body = ctx.request.body
        // 1. 基本的数据验证
        ctx.validate({
            email: { type: 'email' },
            password: { type: 'string' },
        })
        const user = await this.service.user.findByEmail(body.email)

        // 2. 校验邮箱是否存在
        if (!user) {
            ctx.throw(422, '用户不存在!')
        }
        // 3. 校验密码是否正确
        if (ctx.helper.md5(body.password) !== user.password) {
            ctx.throw(422, '密码不正确!')
        }
        // 4. 生成 token

        // 3. 生成token
        const token = this.service.user.createToken({
            userId: user._id,
        })
        // 5. 发送响应数据
        ctx.body = {
            code: 200,
            data: {
                email: user.email,
                token,
                username: user.username,
                avatar: user.avatar,
            },
            msg: '登录成功',
        }

    }

    // 获取当前用户信息
    async getCurrentUser() {
        const user = this.ctx.user

        this.ctx.body = {
            code: 200,
            data: {
                email: user.email,
                token: this.ctx.headers.authorization,
                username: user.username,
                avatar: user.avatar,
            },
            msg: '登录成功',
        }
    }

    // 更新当前用户信息
    async update() {
        // 获取请求体
        const body = this.ctx.request.body
        // 1. 基本数据验证
        this.ctx.validate({
            username: { type: 'string', required: false },
            email: { type: 'email', required: false },
            password: { type: 'string', required: false },
            avatar: { type: 'string', required: false },
            channelDescription: { type: 'string', required: false },
        })
        // 2. 校验用户是否已存在
        // 3. 校验邮箱是否已存在
        if (body.email) {
            console.log(body.email, 99)
            console.log(this.ctx.user, 99)
            if (body.email !== this.ctx.user.email) {
                await this.service.user.findByEmail(body.email) && this.ctx.throw(422, '邮箱已存在!')
            }
        }
        // 4. 更新用户信息
        console.log(body, 88)
        const user = this.service.user.updateUser(body)
        console.log(user, 801)
        // 5. 返回更新后的用户信息
        this.ctx.body = {
            code: 200,
            data: {
                username: user.username,
            },
            msg: '更新成功',
        }
    }
}

module.exports = UserController
