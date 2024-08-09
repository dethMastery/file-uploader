function Middleware(app, exp) {
  app.use(exp.static('static'))
}

module.exports = Middleware
