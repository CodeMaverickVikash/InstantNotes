const express = require("express");
const {hasUserToken} = require("../middleware");
const { body } = require("express-validator");
const {
  getAllNotes,
  addNewNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const router = express.Router();

// "/api/notes/fetchallnotes".
router.get("/fetchallnotes", hasUserToken, getAllNotes);
router.post(
  "/addnote",
  hasUserToken,
  [
    body("title", "Enter a valid name").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  addNewNote
);

router.put("/updatenote/:id", hasUserToken, updateNote);
router.delete("/deletenote/:id", hasUserToken, deleteNote);

module.exports = router;
