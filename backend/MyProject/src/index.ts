import express, { Request, Response } from 'express';
import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import {User} from "./entity/User";
import { Book } from "./entity/Book";
import { Library } from './entity/Library';

import http from "http";
import path from "path";

let app = express();
app.disable('x-powered-by');
let server = http.createServer(app);

const output: string = "database-backend";
app.use(express.json());

app.get("/db", (req, res) => {
  res.send(output).end();
});


createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));


createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const book = new Book();
      book.id = 1;;
      book.title= "Timber";;
      book.author= "Timber";;
      book.publisher= "Timber";;
      book.genre= "Timber";;
      book.ibsn = 31233;
      book. date= "Timber";;
      book.loanStatus= true;
    await connection.manager.save(book);
    console.log("Saved a new book with id: " + book.id);

    console.log("Loading books from the database...");
    const books = await connection.manager.find(Book);
    console.log("Loaded books: ", books);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));


createConnection().then(async connection => {

  console.log("Inserting a new user into the database...");
  const library = new Library();
    library.id = 1;;
    library.name= "Timber";;
    library.address= "123 Timber lane";;
    library.books= ["Timber"];;
    library.employees= ["Timber"];;
    library.isOpen = true;

  await connection.manager.save(library);
  console.log("Saved a new library with id: " + library.id);

  console.log("Loading libraries from the database...");
  const libraries = await connection.manager.find(Library);
  console.log("Loaded books: ", libraries);

  console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));


app.use('/', express.static(path.resolve(__dirname, 'client')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});


server.listen(8080);

