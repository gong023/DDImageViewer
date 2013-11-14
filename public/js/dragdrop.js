(function() {
  var uploader = $("#drop_area").dropzone({url: "/display"});
  uploader.on("addfile", function(file) {
  });
}());
