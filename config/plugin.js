'use strict'

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    mongoose: {
        enable: true,
        package: 'egg-mongoose',
    },

    // 配置请求参数验证
    validate: {
        enable: true,
        package: 'egg-validate',
    },
}
