const Image = require('../models/Image')
const { unlink } = require('fs-extra')
const path = require('path')

const home = async (req, res) => {
    const images = await Image.find()
    res.render('index', {images})
}

const upload = (req, res) => {
    res.render('upload')
}

const uploaded = async (req, res) => {
    const { title, description } = req.body
    const { filename, originalname, mimetype, size } = req.file
    const path = `/img/upload/${req.file.filename}`
    const image = new Image({title, description, filename, path, originalname, mimetype, size})
    await image.save()
    res.redirect('/')
}

const profileImage = async (req, res) => {
    const image = await Image.findById(req.params.id)
    res.render('profile', {image})
}

const imageDeleted = async (req, res) => {
    const imageDeleted = await Image.findByIdAndDelete(req.params.id)
    await unlink(path.resolve(`src/public${imageDeleted.path}`))
    res.redirect('/')
}

module.exports = {
    home,
    upload,
    uploaded,
    profileImage,
    imageDeleted
}