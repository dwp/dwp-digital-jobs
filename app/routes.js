var express = require('express');
    router = express.Router();
    _ = require('underscore');

router.get('/', function (req, res) {
  var data = req.app.locals.data;
  var now = new Date();

  for (job in data) {
  var title = data[job].title;
      slug = title.replace(/\s+/g, '-').toLowerCase();
      data[job].slug = slug;
      nd = new Date(data[job].dateClosing);
      data[job].dateClosingString = nd;
  }

  res.render('index', {data, now});
});

router.get('/open-jobs', function (req, res) {
  var data = req.app.locals.data;
  var now = new Date();

  for (job in data) {
  var title = data[job].title;
      slug = title.replace(/\s+/g, '-').toLowerCase();
      data[job].slug = slug;
      nd = new Date(data[job].dateClosing);
      data[job].dateClosingString = nd;
  }

  res.render('open-jobs', {data, now});
});


router.get('/job/:reference/:title', function(req, res) {
  var data = req.app.locals.data;

  res.render('job', {
    job : _.findWhere(data, {reference: req.params.reference}),
    jobString : JSON.stringify(_.findWhere(data, {reference: req.params.reference})),
    jobID : [req.params.reference]
  });
});

router.get('/api/:reference', function(req, res) {
  var data = req.app.locals.data;

res.json(_.findWhere(data, {reference: req.params.reference}));
});

module.exports = router;
