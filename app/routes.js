var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var data = req.app.locals.data;

  res.render('index', data);
});

router.get('/job/:id', function(req, res) {
var data = req.app.locals.data;

  res.render('job', {
    job : data[req.params.id],
    jobString : JSON.stringify(data[req.params.id]),
    jobID : [req.params.id]
  });
});

router.get('/api/:id', function(req, res) {
var data = req.app.locals.data;

res.json(data[req.params.id]);
});

module.exports = router;
