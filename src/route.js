async function Routes(app) {
  app.get('/', (req, res) => {
    res.send('hello world')
  })
}

module.exports = Routes
