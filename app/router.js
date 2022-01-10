'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app
    // 因为 auth 这个中间件 不需要全局配置  需要单独引入
    const auth = app.middleware.auth()
    router.prefix('/api/v1')
    router.get('/', controller.home.index)

    router.post('/user', controller.user.create)
    router.post('/user/login', controller.user.login)
    router.get('/user', auth, controller.user.getCurrentUser)
    router.patch('/user', auth, controller.user.update)

    router.post('/users/:userId/subscribe', auth, controller.user.subscribe)
}
