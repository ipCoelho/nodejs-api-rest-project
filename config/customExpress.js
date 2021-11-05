// This is the main framework responsible for interacting with all the modules.
const express = require('express')
const consign = require('consign')

module.exports = () => {
    const app = express()

    app.use(express.json())

    consign().include('controllers').into(app)

    return app
}
