var express = require('express');
var router = express.Router();
var multer  = require('multer');
var md5 = require('md5');
var fs = require('fs');
var path = require('path');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, md5(Date.now()) + '.mp3')
  }
})

var upload = multer({ storage: storage })

router.post('/', upload.single('file'), function (req, res) {
  res.status(200).send("http://URL/" + req.file.path);
  setTimeout(function(){
      
      let filename = path.join(__dirname, '../uploads', req.file.filename);
          if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
       }else{}
  
  }, 300000);
});

module.exports = router;
