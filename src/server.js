const express = require('express')
const path = require('path')
const morgan = require('morgan')
const multer = require('multer')
const uuid = require('uuid/v4')
const { format } = require('timeago.js')

// Initialization
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/upload'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname))
    }
})
app.use(multer({storage}).single('image'))

// Global variables
app.use((req, res, next) => {
    app.locals.format = format
    next()
})

// Routes
app.use(require('./routes/index.routes'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app