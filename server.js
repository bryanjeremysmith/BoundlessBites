
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    logged_in: false,
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public/assets')));
app.use (cookieParser());

app.get('/setcookie', (req, res) => {
  res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
      maxAge: 86400, //max age is in seconds it is currently set to 24 hours
      secure: true,
      httpOnly: true,
      sameSite: 'strict'
  });
  res.send('Cookie have been saved successfully');
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});