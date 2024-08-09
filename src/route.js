const PageController = require('./pages/controller')

async function Routes(app, upload) {
  PageController(app, upload)
}

module.exports = Routes
