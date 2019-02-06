var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/:id', function(req, res){
    let filename = path.join(__dirname, '../uploads', req.params.id);
    if (fs.existsSync(filename)) {
        res.status(200).sendFile(filename);
}else{
      res.status(404).send("File Not Found");
}
});

module.exports = router;