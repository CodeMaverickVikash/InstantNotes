const express = require('express')
const connectToMongo = require('./db');
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())

// if you want to use req.body, then you have to use middleware
app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/notes', require('./routes/notes.js'));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})