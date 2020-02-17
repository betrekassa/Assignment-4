import express from 'express';
import db from './database';


const app = express();

app.use(express.json());
/* 
const jokeRoute = async (request, response) => {

  const { id } = request.params || {};

  const joke = await getJokeById(parseFloat(id));

  response.json(joke);

};

app.get('/api/joke/:id', jokeRoute);
 */

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


const addpersonRoute = async (request, response) => {

    handleError(response, async () => {
  
      //const adds_person = request.body;
  
      //personadd.created_on = new Date(); // next week we'll learn to make SQL do this
      await db.insert(Request.body).returning('*').into('tbl_person').then(function(data)
      {
          response.send(data);
      });
  
      //await addperson(person);
  
  //    response.json({ success: true });
  
   });
  
  };
app.post('/add_person', addpersonRoute);




/* const randomRoute = async (request, response) => {

  const joke = await getRandomJoke();

  response.json(joke);

};

app.get('/api/random', randomRoute);



const searchRoute = async (request, response) => {
  const jokes = await getJokesByCategoryId(parseFloat(request.query.category));

  response.json(jokes);

};

app.get('/api/search', searchRoute);



const handleError = async (response, route) => {

  try {

    await route();

  } catch (err) {

    response.json({ success: false, message: JSON.stringify(err) });

  }

};



const addJokeRoute = async (request, response) => {

  handleError(response, async () => {

    const joke = request.body;

    joke.created_on = new Date(); // next week we'll learn to make SQL do this

    await addJoke(joke);

    response.json({ success: true });

  });

};

app.post('/api/addJoke', addJokeRoute);


const deleteJokeRoute = async (request, response) => {

  handleError(response, async () => {

    const { id } = request.query || {};

    await deleteJoke(id);

    response.json({ success: true });

  });

};

app.get('/api/deleteJoke', deleteJokeRoute);


*/

const staticRoute = express.static('public');

app.use('/static', staticRoute);

app.use('/', staticRoute);


export default app;