const fs = require('fs')

async function statusFunction(file, path) {
  let message

  if (file != undefined) {
    console.log(file)
    console.log(`${path}/${file.path}`)

    fs.renameSync(
      `${path}/${file.path}`,
      `${path}/uploads/${file.originalname}`
    )

    message = {
      status: 1,
      message: 'upload complete',
      payload: {
        url: `${process.env.CDN_URI}${file.originalname}`,
      },
    }
  } else {
    message = {
      status: 0,
      message: 'upload incomplete',
    }
  }

  return message
}

async function UploadPage(req, res, path) {
  const rtnPayload = {
    status: await statusFunction(req.file, path),
  }

  res.send(rtnPayload)
}

module.exports = UploadPage
