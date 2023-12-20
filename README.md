# InstantNotes - Note-Taking App
This Note Taking App is built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a simple and efficient way to take and manage notes, making it easy to stay organized and focused.

## Technologies Used
- **Frontend**
    - ***React***: A JavaScript library for building user interfaces.
    - ***react-bootstrap, Bootstrap***: Styling and UI components to create a responsive and visually appealing user interface.
- **Backend**
    - ***Node.js***: A JavaScript runtime for server-side development.
    - ***Express.js***: A fast and minimal web application framework for Node.js.
    - ***Mongoose***: An elegant MongoDB object modeling tool designed to work in an asynchronous environment.
    - ***bcryptjs***: Library for hashing and salting passwords.
    - ***jsonwebtoken***: Used for creating and verifying JSON Web Tokens for user authentication.
- **Features**:
    - Create, edit, and delete notes.
    - User authentication for secure access.
    - Modern and intuitive user interface.

## Quick start:
- **Install MongoDB**: Visit the official MongoDB website (https://www.mongodb.com/try/download/community) to download the MongoDB Community Server.
- **Start MongoDB server**: by running `mongod` command in terminal, it's a global means anywhere you can run. you can use cmd/shell to work with database but we have one more option MongoDB compass to work with database. it's GUI tool.
`mongod` is the primary daemon process for the MongoDB database system. It is responsible for handling database requests, managing data files, performing data transformations, and executing tasks related to database storage and retrieval. When you start mongod, you are essentially starting the MongoDB server.
- **MongoDB Compass**: MongoDB Compass is the official graphical user interface (GUI) for MongoDB. It provides a visual way to interact with and manage MongoDB databases, making it easier for developers and administrators to explore and manipulate data.

```
git clone https://github.com/CodeMaverickVikash/InstantNotes.git
cd InstantNotes
npm install
npm run start
cd backend
npm install
npm run start
```

- **MongoDB interection using cmd**: Run `mongo` in cmd, this command connect you with MongoDB server, now you can interect with MongoDB, it's a global, means anywhere can run.
    - ***Basic query***:
        ```
        show dbs // to show all dbs
        use your_database_name // Switch to a Database
        show collections // Show Collections in the Current Database
        db.your_collection_name.insert({ key: 'value' }) // Insert a Document
        db.your_collection_name.find() // Find all Documents
        db.your_collection_name.update({ key: 'value' }, { $set: { newKey: 'newValue' } }) // Update Document
        db.your_collection_name.remove({ key: 'value' }) // Remove Document
        exit
        ```

- **Debug nodejs app**: you can't run "node fileName" and debugger parrelly, you need only run debugger, it run your app and debugger parrelly.

## Screenshot
![image](https://github.com/CodeMaverickVikash/InstantNotes/assets/90571844/7f3a2d3a-b72f-4c41-a317-e6f94ca8c0ed)
![image](https://github.com/CodeMaverickVikash/InstantNotes/assets/90571844/60ea88dd-9bc6-4a6a-bf8c-61c065c82200)
![image](https://github.com/CodeMaverickVikash/InstantNotes/assets/90571844/c9a2beb1-28a2-4a29-9762-1bac5337d97a)
![image](https://github.com/CodeMaverickVikash/InstantNotes/assets/90571844/86082291-a880-48f4-8d03-b7f7ba0b6a57)
![image](https://github.com/CodeMaverickVikash/InstantNotes/assets/90571844/1a2fef31-1716-404d-bd01-d5bab85eea91)
![image](https://github.com/CodeMaverickVikash/InstantNotes/assets/90571844/d09bd62a-82c4-4c68-b213-bbbb123c9fae)
