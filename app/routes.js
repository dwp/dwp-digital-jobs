var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var fs = require('fs');
  var data = fs.readFileSync(__dirname + '/assets/data/dwp-jobs.json', 'utf-8');
      data = JSON.parse(data);

      /*
      var files = fs.readdirSync(__dirname + '/assets/data/');
      var items = files.length;
       {
        for (var i=0; i<items.length; i++) {
          var data = fs.readFileSync(__dirname + '/assets/data/' + items[i]);
          data = JSON.parse(data);
        }
      });
      console.log(items);
      */

  res.render('index', {jobs: data.jobs});
});

router.get('/job/:id', function(req, res) {
  var fs = require('fs');
  var data = fs.readFileSync(__dirname + '/assets/data/dwp-jobs.json', 'utf-8');
      data = JSON.parse(data);

  res.render('job', {
    job : data.jobs[req.params.id],
    jobString : JSON.stringify(data.jobs[req.params.id]),
    jobID : [req.params.id]
  });
});

router.get('/api/:id', function(req, res) {
  var fs = require('fs');
  var data = fs.readFileSync(__dirname + '/assets/data/dwp-jobs.json', 'utf-8');
      data = JSON.parse(data);

res.json(data.jobs[req.params.id]);
});

module.exports = router;
