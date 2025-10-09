const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

//disk storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //foldername where files get uploads
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function(err, name){
        //generates random name of files so that it wont override
        const fn = name.toString("hex")+ path.extname(file.originalname);
        cb(null, fn);
    })
  }
})
//export upload variable
const upload = multer({ storage: storage })
module.exports = upload;