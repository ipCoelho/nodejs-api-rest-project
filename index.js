// The file Index.js is supposed to do only the execution of the app, nothing else.

// Importing the customExpress.js from the config.
const customExpress = require('./config/customExpress')

app = customExpress()

app.listen(3000, () => console.log('servidor rodando na porta 3000'));