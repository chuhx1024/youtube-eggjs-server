const crypto = require('crypto')
const _ = require('lodash')
exports.md5 = str => {
    return crypto.createHash('md5').update(str).digest('hex')
}
// 挂载 lodash 方法
exports._ = _
