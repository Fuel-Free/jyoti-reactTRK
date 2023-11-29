const router = require('express').Router();
const{ postData,getData,deleteData,update}= require('../controllers/userController')

router.post('/register',postData)
router.get('/getData',getData)
router.post('/deleteData/:id',deleteData)
router.put('/update',update)
module.exports = router