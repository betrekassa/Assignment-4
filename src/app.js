import express from 'express';
import db from './database';
import bodyParser from 'body-parser';
import {addperson, removeperson, searchperson,updateperson} from './services/person';

    const app = express();

    app.use(express.json());

    // create json parser
    var jsonParser = bodyParser.json()

    // create urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

   
    const home_view = async (request, response) => {
        response.sendFile(__dirname+'/index.html');  
      };
    app.get('/', home_view);

    const remove_view = async (request, response) => {
        response.sendFile(__dirname+'/remove_person.html');  
      };
    app.get('/remove_person', remove_view);
    
    const add_view = async (request, response) => {
        response.sendFile(__dirname+'/add_person.html');  
      };
    app.get('/add_person', add_view);

    const update_view = async (request, response) => {
        response.sendFile(__dirname+'/update_person.html');  
      };
    app.get('/update_person', update_view);


    const search_view = async (request, response) => {
        response.sendFile(__dirname+'/search_person.html');  
      };
    app.get('/search_person', search_view);

    app.post('/add_person',urlencodedParser,async(request,response) =>{ 
    
        const person = request.body;
        await addperson(person);
        response.json(person);
    //});
    });


    app.post('/remove_person',urlencodedParser,async(request,response) =>{ 

      const pk_id = request.body.pk_person_id;
      await removeperson(pk_id);
      response.send("Sucesfully Removed");
  });


  
  app.post('/search_person',urlencodedParser,async(request,response) =>{ 
    
   // const text = request.body.searh_text;
    await db('tbl_person')
    .where('first_name','like', `%${request.body.searchtext}%`)
    .then(function(data) 
    { 
      response.send(data);
    });
});
   
app.post('/update_person',urlencodedParser,async(request,response) =>{ 
    
  const person = request.body;
  await updateperson(person);
  response.json(person);
});
const staticRoute = express.static('public');

    app.use('/static', staticRoute);

    app.use('/', staticRoute);


    export default app;