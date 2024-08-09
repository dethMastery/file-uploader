const input = document.querySelector('#fileInput')
const fileName = document.querySelector('#fileName')

function update() {
  const file = input.value.split('\\').reverse()[0]

  fileName.innerHTML = `${file}`
}

async function upload() {
  const file = input.files[0]
  const formData = new FormData()
  formData.append('file', file)
  const call = await axios.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  const resp = await call.then((resp) => resp.data)

  console.log(resp)
}
