const express = require("express");
const connectMongoDb = require("./dbconnect.js");
const cors = require("cors");
const authRouter = require("./src/routes/authRouter.js");
const notesRouter = require("./src/routes/notesRouter.js");

const app = express();
const PORT = 5000;

// Connection
connectMongoDb("mongodb://localhost:27017/inotebook");

// Middleware - plugin
app.use(cors());
app.use(express.json()); // To use request data in req.body, have to use express.json middleware for our app

// Routes
app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`)
);
