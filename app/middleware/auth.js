module.exports = () => {
    return async (ctx, next) => {
        // 1. 获取 请求头的 token 数据
        const token = ctx.headers.authorization

        console.log(token, 9090)

        // 2. 验证 token 无效返回 401
        if (!token) {
            ctx.throw(401)
        }

        // 3. token 有效 根据 userId 获取用户数据挂载到 ctx 上给后续的中间件使用
        try {
            const data = ctx.service.user.verifyToken(token)
            ctx.user = await ctx.model.User.findById(data.userId)

        } catch (err) {
            ctx.throw(402)
        }
        // 4. next 执行后续中间件
        await next()

    }
}
