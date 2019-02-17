
require('dotenv').config()
const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

const app = express()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

var tutsRoute = require('./routes/tuts.route')
var usersRoute = require('./routes/users.route')
var productsRoute = require('./routes/products.route')
var authRoute = require('./routes/auth.route')
var authMiddleware = require('./middleware/auth.middleware')
var cartRoute = require('./routes/cart.route');
var sessionMiddleware = require('./middleware/session.middleware')


const port = 3000

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SIGNED_COOKIES))
app.use(sessionMiddleware.session);

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Home'
    });
})
              
app.use('/tuts', tutsRoute)
app.use('/users', authMiddleware.requireAuth, usersRoute)
app.use('/products', productsRoute)
app.use('/auth', authRoute)
app.use('/cart', cartRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))