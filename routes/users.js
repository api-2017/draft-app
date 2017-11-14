var express = require('express');
var router = express.Router();

const request = require('request');



/* GET home page. */
router.get('/:username', function(req, res, next) {
  console.log("USERNAME PARAMS:", req.params['username']);
  const payload = {
    url: `https://api.github.com/users/${req.params['username']}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env['GITHUB_USER_READ_TOKEN']}`
    }
  }
  console.log("PAYLOAD URL:", payload.url);
  request(payload, (error, response, data) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('data:', data); // Print the data from the GitHub API
    var a = JSON.parse(data);
    console.log(a.blog);
    res.render('index',
    {
      title: "GitHub Profile for " + a.name,
      profile: a
    });
  });
});

module.exports = router;
