const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', routes)

app.use((req, res, next) => {
  res.header("Content-Type",'application/json');
  next();
});

app.listen(3000, () => console.log('Listening on port 3000'))
