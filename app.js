const http=require('http');
const path=require('path');
const express = require('express');
//const router=require('./routes');
const bodyParser=require('body-parser');
//const cookieParser = require('cookie-parser');
//const expressSession=require('express-session');
//const expressValidator=require('express-validator');

var cors = require('cors');

const app = express();

const oneWeek = 604800000;

const session={
    secret: 's3Cur3',
    //name: 'sessionId'
    resave : false,
    saveUninitialized:true
  }
port=8082

  const config = {
    origin: 'http://localhost:8080',
    credentials: true,
};

app.use(cors());
//app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(expressValidator());
app.use(express.static(path.join(__dirname,'/public')));

//app.set('trust proxy', 1)  // trust first proxy


//app.use(expressSession(session));

 /* if(process.env.PORT){
      session.cookie={secure: true};
  }*/


app.use('/', require('./routes/routes'));
//app.use('/api', require('./routes/account'));
//app.use('/api',require('./routes/api'))


//fallbacks
// Handle 404
  app.use(function(req, res) {
     //res.send('404: Page not Found', 404);
     res.status(404).send('404: Page not Found')
  });

  // Handle 500
  //TODO: remove the comment while in PROD
  /*
  app.use(function(error, req, res, next) {
     //res.send('500: Internal Server Error', 500);
     res.status(500).send('500: Internal Server Error');
  });
  */
http.createServer(app).listen(process.env.PORT || port);
console.log(process.env.PORT || port);
