const multer = require('multer')

const storage = multer.diskStorage({
   destination:function(req,file,cb){
    cb(null,'public/images/profileImage')
   },
   filename:function(req,file,cb){
    cb(null,`${Date.now()}_${file.originalname}`)
   }
})
exports.upload2 = multer({storage:storage})