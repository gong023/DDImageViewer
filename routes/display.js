exports.display = function(req, res) {
  if (req.files == undefined) {
    res.writeHead("403", {"content-type": "text/html"});
    res.write("No File Posted.")
    res.end();
  } else {
    createFile(req, res)
    res.writeHead("200", {"content-type": "text/html"});
    res.write("OK");
    res.end();
  }
}

var createFile = function(req, res) {
  var fs = require('fs');
  console.log(Object.keys(req.files.file));
  console.log(req.files.file.originalFilename);
//  for (var file in req.files) {
//    console.log(file);
//  }
//    fs.readFile(req.files.displayImage.path, function (err, data) {
//      console.log(data)
//
//      var newPath = __dirname + "/uploads/uploadedFileName";
//      fs.writeFile(newPath, data, function (err) {
//        res.redirect("back");
//      });
//    });
}
