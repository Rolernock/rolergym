import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import ConnectDB from './config/db.js'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT

//Parse incoming request with JSON bodies
app.use(express.json())

//Resolving __dirname for ES module
const __dirname = path.resolve()

//Routes
app.use('/api/contact', contactRoutes)

//Use the client app
app.use(express.static(path.join(__dirname, '/client/dist')))

//Render the client app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

ConnectDB()
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
