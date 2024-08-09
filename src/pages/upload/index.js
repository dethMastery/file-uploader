async function UploadPage(req, res) {
  console.log(req.file)

  if (req.file == undefined) {
    res.send('blank')
  } else {
    res.send('a')
  }
}

module.exports = UploadPage
