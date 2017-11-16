const express      = require('express');
const routes       = require('./routes');
const path         = require('path');
//const bodyParser   = require('body-parser');
//const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3001;

// configure the express server
const app = express();

app.set('port', port);


//app.use(cookieParser())
//  .use(bodyParser.json())
//  .use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, './build')))
  .use('/', routes);


// Start her up, boys
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});