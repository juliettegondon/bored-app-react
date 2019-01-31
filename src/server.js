var express = require('express')
var expressStaticGzip = require('express-static-gzip')

var app = express()
app.use('/', expressStaticGzip('public'))

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on Port ${port}!`) // eslint-disable-line no-console
})
