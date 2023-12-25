import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routers/index.js'
import db from './dbconfig/index.js'
import dotenv from 'dotenv'
import path from 'node:path'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000



app.use(cors())
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))

const rootPath = process.cwd()
const uploadsDirectory = path.join(rootPath, 'uploads/image');
app.use('/static', express.static(uploadsDirectory));
// Middleware để xử lý request với stream
app.use(express.raw({ type: 'image/*', limit: '1000mb' }));

routes(app)

//Connect to DB
db.connect(process.env.DB_URI).then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})

