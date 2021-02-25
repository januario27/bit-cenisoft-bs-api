const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createDetail, deleteDetail, getDetail, getDetails, updateDetail } = require('./actions')
const coverUploader = multer({ dest: 'covers/' })
const setCover = require('../../middlewares/setCover')

// GET all Details
router.get('/', getDetails)

// GET Detail by ID
router.get('/:id', getDetail)

// POST Create a Detail
router.post('/', coverUploader.single('cover'), setCover, createDetail)

// PUT Update a Detail's info
router.put('/:id', coverUploader.single('cover'), setCover, updateDetail)

// DELETE Detail by ID
router.delete('/:id', deleteDetail)

module.exports = router