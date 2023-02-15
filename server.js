
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const authRouter = require('./controllers/auth');
const passport = require('passport');
//const SQLiteStore = require('connect-sqlite3')(session);
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//const sequelize = require('./config/connection'); // replace with your Sequelize instance

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



app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
    table: 'User', // replace with the name of your session table
  }),
}));
app.use(passport.authenticate('session'));

app.use(routes);

app.use('/', authRouter);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});