const Note = require('../models/note.model.js');

//create and save a new note
exports.create = (req, res) => {
//validate request
if(!req.body.content){
    return res.status(400).send({
        message: "Note content cannot be empty"
    });
}
//create a note
const note = new Note({
    title: req.body.title,
    content: req.body.content
});
note.save()
.then(data => {
    res.send(data)
}).catch(err => {
    res.status(500).send({
        message: "Some error occured while creating the database"
    });
});
};

//update and save a note
exports.update = (req, res) => {

};

//return all the file which is found
exports.findAll = (req, res) => {
Note.find()
.then(notes => {
    res.send(notes);
}).catch(err => {
    res.status(500).send({
        message: err.message
    });
});
};

//find only one record
exports.findOne = (req, res) => {
Note.findById(req.params.noteId)
.then(note => {
    if(!note){
        return res.status(404).send({
            message: "Note not found"
        });
    }
    res.send(note);
}).catch(err => {
    if(err.kind === 'objectId'){
        return res.status(404).send({
            message: "ID Not found"
        });

    }
    return res.status(500).send({
        message: "Server error"
    });
});
};

//delete the record
exports.delete = (req, res) => {

};