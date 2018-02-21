let express = require('express');
let bodyParser = require('body-parser');
let api = require('./apiHelpers.js');
let path = require('path')
let db = require('../db/mysql.js').db

// var items = require('../database-mysql');
let app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')))

//Users
app.post('/users', (req, res) => {
  console.log('pong!', req.body.username);
  // expecting body: {username: USERNAME}
  const username = req.body.username;

  // check if user exists
  db.query(`SELECT * FROM users WHERE username="${username}"`, (err, results) => {
    if (err) {
      console.log(err);
      res.send('error');
      return;
    }
    console.log(results)
    if (!results) {
      db.query(`INSERT INTO users (username) VALUES ("${username}");`, (err, results) => {
        if (err) {
          console.log(err)
          res.send('error')
          return
        }
        res.send()
      });
    } else {
      res.status(500).send('USER EXISTS');
    }
  });
});

app.get('/users', (req, res) => {
  //Will send back all of user's data... do this later
});


//Commutes
app.post('/commutes', (req, res) => {

})

app.get('/commutes', (req, res) => {

})

app.delete('/commutes', (req, res) => {

})


//Places
app.post('/places', (req, res) => {

})

app.get('/places', (req, res) => {

})

app.delete('/places', (req, res) => {

})


//Timeline
app.get('/timeline', (req, res) => {

})


//Status
app.get('/status', (req, res) => {

})

app.listen(8080, () => {
  console.log('listening on port 8080!');
});
