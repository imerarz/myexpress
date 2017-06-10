const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const morgan = require('morgan');

// Static folder for serving js and css files
router.use(express.static(path.join(__dirname, 'public')));

router.use(morgan('tiny'));

router.get('/', function(req, res) {
  res.send('Hello World!');
});

app.use('/', router);

app.listen(3000, function(){
  console.log('Express App running on port 3000!');
});
