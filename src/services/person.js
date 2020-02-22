import db from '../database'
import { text } from 'express';
//import bodyParser from 'body-parser';

export const addperson = async (person) => 
  {
   
      const [ids] = await db('tbl_person').insert(person).returning('pk_person_id');//.then(function(data)
      return 'Succesfull.'; 
  };

  export const removeperson = async id => {
    await db('tbl_person').delete().where({pk_person_id : id});
    return 'Succesfull.'; 
  };
  
  export const searchperson = async text => {
    let sp = db('tbl_person')
    .where('first_name','like', `%${text}%`).returning(['first_name','last_name','gender','date_of_birth']).toString();
    //console.log(sp.toString());
  };

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
  };
  
