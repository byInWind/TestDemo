const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup 注册页
router.get('/', checkNotLogin, function (req, res, next) {
    res.render('login')
})

// POST /signup 用户注册
router.post('/', checkNotLogin, function (req, res, next) {
    res.send('注册')
})

module.exports = router
