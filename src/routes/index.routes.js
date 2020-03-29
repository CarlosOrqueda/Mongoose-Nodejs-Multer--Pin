const { Router } = require('express')
const router = Router()
const { home, upload, uploaded, profileImage, imageDeleted } = require('../controllers/index.controllers')

router.get('/', home)

router.get('/upload', upload)

router.post('/upload', uploaded)

router.get('/image/:id', profileImage)

router.get('/image/:id/delete', imageDeleted)

module.exports = router