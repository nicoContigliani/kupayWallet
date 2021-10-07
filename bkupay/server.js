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

const password = 'oe3im3io2r3o2'
const rounds = 10
const x =[]

const hashPassword = async () => {
    const hash = await bcrypt.hash(password, rounds)
    console.log(hash)
    console.log(await bcrypt.compare(password, hash))
  }
  
  hashPassword()

const port = 3500

app.use(express.urlencoded({ extended: false }))

app.use(morgan())
app.use(cors())


app.use(express.json());


app.use('/', require('./routes'));


app.listen(port, () => console.log(`coorriendo por el internet`))