const express=  require('express');
const mustacheExpress = require('mustache-express');
const cookieParser = require('cookie-parser');
const path = require('path');
const public = path.join(__dirname, 'public');
const app = express();

const errorController = require('./controllers/errorController');

const pageRoutes = require('./routes/pageRoutes');
const authenticationRoutes = require('./routes/authenticationRoutes');
const staffPageRoutes = require('./routes/staffPageRoutes');

app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.use('/', pageRoutes);
app.use('/', authenticationRoutes);
app.use('/', staffPageRoutes);
app.get('*', errorController.error);

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

require('dotenv').config()