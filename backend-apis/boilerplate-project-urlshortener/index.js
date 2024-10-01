require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns')

const app = express();
let bodyParser = require('body-parser')

// Basic Configuration
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/',function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

let short_url;
let original

app.post('/api/shorturl',function(req,res) {

  original = req.body.url
  let urlObj = new URL(original)

  dns.lookup(urlObj.hostname, (err, address, family) => {
    if (err) {
      res.json({"error": "invalid url"})
    } else {
      short_url = Math.floor(Math.random() * 100)
      res.json({"original_url": original, "short_url": short_url})
    }
  })

})

app.get('/api/shorturl/:short_url?',function(req,res) {
  let short = req.params.short_url
  if (short == short_url) {
    res.redirect(original)
  } else {
    res.json({"error":"invalid url"})
  }
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
