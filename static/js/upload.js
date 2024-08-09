const input = document.querySelector('#fileInput')
const fileName = document.querySelector('#fileName')

let payload

function update() {
  const file = input.value.split('\\').reverse()[0]

  fileName.innerHTML = `${file}`
}

function callback(returnCall) {
  payload = returnCall

  return payload
}

async function upload() {
  const file = input.files[0]
  const formData = new FormData()
  formData.append('file', file)

  await axios
    .post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((resp) => {
      console.log(resp.data)
    })
}
