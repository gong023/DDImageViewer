exports.index = function(req, res) {
  res.render('index', { title: 'hi' });
};

var disp = require('./display');
exports.display = disp.display;
