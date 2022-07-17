const express=require('express')
const router=express.Router()
const {protect}=require('../middleware/authMiddleware')

const {getUsers,editUser,deleteUser}=require('../controllers/userController')

router.get('/',protect,getUsers)
router.delete('/deleteUser/:id',protect,deleteUser)
router.put('/editUser/:id',protect,editUser)



module.exports=router;