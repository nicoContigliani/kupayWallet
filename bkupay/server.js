if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require("cors");
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
var morgan = require('morgan')
const pool = require('./databases/database');

const port = 3500

app.use('/', require('./routes'));


app.listen(port, () => console.log(`coorriendo por el internet`))