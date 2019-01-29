var express = require('express')

var app = express()
app.use(express.static('public'))

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on Port ${port}!`) // eslint-disable-line no-console
})
