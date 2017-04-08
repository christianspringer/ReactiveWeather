var express = require('express');

//create app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (request, response, next) {
  if (request.headers(['x-forwarded-proto'] === 'http')) {
    next();
  } else {
    response.redirect('http://' + req.hostname + req.url)
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Server is running on port: ' + PORT);
})
