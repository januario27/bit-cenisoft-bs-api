const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createSale, deleteSale, getSale, getSales, updateSale } = require('./actions')
const coverUploader = multer({ dest: 'covers/' })
const setCover = require('../../middlewares/setCover')

// GET all Sales
router.get('/', getSales)

// GET Sale by ID
router.get('/:id', getSale)

// POST Create a Sale
router.post('/', coverUploader.single('cover'), setCover, createSale)

// PUT Update a Sale's info
router.put('/:id', coverUploader.single('cover'), setCover, updateSale)

// DELETE Sale by ID
router.delete('/:id', deleteSale)

module.exports = router