//import express, { request, response } from 'express';
import bodyparser from 'body-parser';
import app from './app';

//const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

//app.use('/',appiRoute);

// app.get('/',function(req,res){
//     res.send('Hello');

// });

app.listen(8000, () => 

  console.log(`Listening on port 8000!`));