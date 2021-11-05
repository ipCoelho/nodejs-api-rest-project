// express is a module/dependence that runs a server on the local environment.
// HTTP helper and router.
const express = require('express')

// Autoloads my scripts.
const consign = require('consign')

// Node.js HTTP Body PARSER middleware (middleware: software that provides help, or support to another application)
const bodyParser = require('body-parser')

// In node.js the architecture works by the construction of modules, so whenever a file is created, to be used it needs to be exported, doing "module.exports = callback function"

module.exports = () => {
    const app = express()

    // app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}
