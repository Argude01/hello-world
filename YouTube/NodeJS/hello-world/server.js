const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express();

const routes = require('./routes/index'); // module router imported

// settings
server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

// middlewares
server.use( (req, res, next) => { console.log(`${req.url} -${req.method}`); 
                                  next(); 
                                });
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

// routes
server.use(routes);

// static files
server.use(express.static(path.join(__dirname, 'public')));

// start server
server.listen( server.get('port'), () => { console.log('Server on port', server.get('port')) } );