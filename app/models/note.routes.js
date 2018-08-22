module.exports = (app) => {
const notes = require('../controller/note.controller.js');

//create new note
app.post('/notes', notes.create);

//get all the notes from database
app.get('/notes', notes.findAll);

//find one record from the DB
app.get('/notes/:noteId', notes.findOne);
}