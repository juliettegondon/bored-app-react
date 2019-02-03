import express from 'express'
import expressStaticGzip from 'express-static-gzip'

const app = express()
app.use('/', expressStaticGzip('build'))

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on Port ${port}!`) // tslint:disable-line:no-console
})
