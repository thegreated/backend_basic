const express = require('express')
const router = express.Router()

const ListingController = require('../controllers/ListingController')
//const authenticate = require('../middleware/authenticate')


router.get('/', ListingController.index)
router.get('/show', ListingController.show)
router.post('/store', ListingController.store)
router.patch('/update', ListingController.update)
router.delete('/delete', ListingController.destroy)

module.exports = router;