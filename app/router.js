'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app
    router.prefix('/api/v1')
    router.get('/', controller.home.index)

    router.post('/user', controller.user.create)
}
