const PageController = require('./pages/controller')

async function Routes(app) {
  PageController(app)
}

module.exports = Routes
