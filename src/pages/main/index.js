const HeadComponents = require('../../components/head')

function HomePage(req, res) {
  const head = `<link rel="stylesheet" href="/css/index.css">`

  const content = `<!DOCTYPE html>
<html lang="en">
  ${HeadComponents(head)}
  <body>
    <div class="main-container">
      <div class="card-upload">
        <input type="file" id="fileInput" onchange="update()" hidden />
        <div>
          <p id="fileName">-- File Name --</p>
          <label for="fileInput">Browse</label>
        </div>
        <button id="upload" type="submit" onclick="upload()">Upload!!</button>
      </div>
    </div>

    <script src="/js/upload.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </body>
</html>
`

  res.send(content)
}

module.exports = HomePage
