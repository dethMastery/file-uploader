const exp = require('express')
require('dotenv').config()

const Middleware = require('./src/middleware')
const Routes = require('./src/route')
const Serve = require('./src/serve')

const app = exp()
const PORT = process.env.PORT || 3000

Middleware(app, exp)
Routes(app)
Serve(app, PORT)
