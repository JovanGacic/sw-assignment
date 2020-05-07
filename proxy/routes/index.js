var express = require('express');
var axios = require('axios')
var router = express.Router();
const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/proxy', cors(corsOptions), async function(req, res, next) {
  //console.log(req.query.url)
  const x = await axios.get(req.query.url)
  res.header()
  res.send(x.data);
});

module.exports = router;