import http from 'http'
import fs from 'fs'

const port = 80

http.createServer((req, res) => {
  fs.readFile('index.htm', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open the file "index.htm".')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(port, () => {
  console.log('Server listening on: http://localhost:%s', port)
})
