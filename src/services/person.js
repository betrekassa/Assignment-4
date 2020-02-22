import db from '../database'
import { text } from 'express';
//import bodyParser from 'body-parser';

export const addJokeCategory =
  (joke_id, category_id) =>
    knex('jokes_categories')
      .insert({ category_id, joke_id })
      .where({ id });

export const addperson = async (person) => 
  {
   
      const [ids] = await db('tbl_person').insert(person).returning('pk_person_id');//.then(function(data)
      return 'Succesfull.'; 
  };

  export const removeperson = async id => {
    await db('tbl_person').delete().where({pk_person_id : id});
    return 'Succesfull.'; 
  }
  
  export const searchperson = async text => {
    await db('tbl_person')
    .where('first_name','like', `%${text}%`)
    .then(function(data) 
    { 
      return data;
    });

  }

  export const updateperson = async person => {
    await db('tbl_person')
    .where('pk_person_id', person.pk_person_id)
    .update({
        first_name: person.first_name,
        last_name:person.last_name,
        gender: person.gender,
        dob: person.dob  
    })
    .then(function(data) 
    { 
      //response.json({ success: true });
      return({success: true});
      //response.json(data);
    });


  }
  

  // Create (Insert)
    /*
    export const add_person = app.post('/add_person',urlencodedParser,async(request,response) =>{ 
      const person = request.body;
      try {
        await   db.insert(person).returning('*').into('tbl_person').then(function(data)
        {

        response.send(data);
        });
      } catch (error) {
        response.status(500).json({ error });
      }
    });

    // Delete 
    export const remove_person = app.post('/remove_person',urlencodedParser,async(request,response)=>
    {
      const person = request.body;

      try {
        await db('tbl_person')
        .where('pk_person_id', person.pk_person_id)
        .del()
        .then(function() 
        { 
          response.json({ success: true });
        });
      } catch (error) {
        response.status(500).json({ error });
      }
    });

        // Update
    export const update_person = app.post('/update_person',urlencodedParser,async(request,response)=>
    {
    // app.post('/update_person',urlencodedParser, async (request, response) => {
     const person = request.body;

          try {
            await db('tbl_person')
            .where('pk_person_id', person.pk_person_id)
            .update({
                first_name: person.first_name,
                last_name:person.last_name,
                gender: person.gender,
                dob: person.dob  
            })
            .then(function(data) 
            { 
              response.json({ success: true });
              //response.json(data);
            });
          } catch (error) {
            response.status(500).json({ error });
          }
    });

      // Search
    export const search_person = app.post('/search_person',urlencodedParser,async(request,response)=>
    {
      //  app.post('/Search_person',urlencodedParser, async (request, response) => {
        
        try {
          await db('tbl_person')
          .where('first_name','like', `%${request.body.searchtext}%`)
          .then(function(data) 
          { 
            response.send(data);
          });
        } catch (error) {
          response.status(500).json({ error });
        }
      });
*/

