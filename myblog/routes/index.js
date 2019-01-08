module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts')
    })
    app.use('/login', require('./login'))
    app.use('/signin', require('./signin'))
    app.use('/logout', require('./logout'))
    app.use('/posts', require('./posts'))
    app.use('/comments', require('./comments'))
}
