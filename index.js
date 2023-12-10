import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routers/index.js'
import db from './dbconfig/index.js'

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

routes(app)

//Connect to DB
db.connect().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})

