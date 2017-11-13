const express      = require('express');
const routes       = require('./routes');

const port = process.env.PORT || 3000;

// configure the express server
const app = express();

app.set('port', port);
app.use('/', routes);

// Start her up, boys
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});