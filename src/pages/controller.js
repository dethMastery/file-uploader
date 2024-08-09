const HomePage = require('./main')
const UploadPage = require('./upload')

async function PageController(app) {
  app.get('/', (req, res) => {
    HomePage(req, res)
  })

  app.post('/upload', (req, res) => {
    UploadPage(req, res)
  })
}

module.exports = PageController
