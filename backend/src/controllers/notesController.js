const notesModel = require("../models/notesModel");
const validator = require("express-validator");

const getAllNotes = async (req, res) => {
  try {
    const notes = await notesModel.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error"); // status 500 means internal server error
  }
};

async function addNewNote(req, res) {
  try {
    const { title, description, tag } = req.body;

    // if there are errors, return Bad request and the errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      // is not empty
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new notesModel({
      // this will return promise
      title,
      description,
      tag,
      user: req.user.id,
    });
    const saveNote = await note.save();
    res.json(saveNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error"); // status 500 means internal server error
  }
}

const updateNote = async (req, res) => {
  try {
    const { title, description, tag } = req.body; // destructuring
    // Create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // find the note to be updated and update it
    let note = await notesModel.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await notesModel.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error"); // status 500 means internal server error
  }
};

const deleteNote = async (req, res) => {
    try {
      // find the note to be deleted and delete it
      let note = await notesModel.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }
  
      // Allow deletion only if user owns this note
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
  
      note = await notesModel.findByIdAndDelete(req.params.id);
      res.json({ Success: "Note has been deleted", note: note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error"); // status 500 means internal server error
    }
  }

module.exports = { getAllNotes, addNewNote, updateNote, deleteNote };
