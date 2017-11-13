var express = require('express');
var router = express.Router();
const request = require('request');
const payload = {
  url: 'https://api.github.com/user',
  headers: {
    'User-Agent': 'request',
    'Authorization': `token ${process.env['GITHUB_USER_READ_TOKEN']}`
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
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
