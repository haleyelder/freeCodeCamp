// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get('/api/:date?', function(req,res) {
  let dateQuery  = req.params.date
  let unix;
  let UTCtime;

  if (dateQuery) {
    if (!isNaN(Number(dateQuery))) {
      let dateValidate = new Date(Number(dateQuery))
      if (!isNaN(Date.parse(dateValidate))) {
        unix = Number(dateQuery)
        let dateObj = new Date(unix)
        UTCtime = dateObj.toUTCString()
      } else {
        res.json({"error":"Invalid Date"})
      }
    } else {
      let dateValidate = new Date(dateQuery)
      if (!isNaN(Date.parse(dateValidate))) {
        unix = Math.floor(new Date(dateQuery).getTime())
        let dateObj = new Date(unix)
        console.log(dateObj)
        UTCtime = dateObj.toUTCString()
      } else {
        res.json({"error":"Invalid Date"})
      }
    }

  } else {
    unix = Date.now()
    UTCtime = new Date()
  }

  res.json({'unix': unix, "utc": UTCtime})
})



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
