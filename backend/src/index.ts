import http from "http";
import express from "express";
import path from "path";

const output: string = "hello world!";
let app = express();
app.disable('x-powered-by');
let server = http.createServer(app);


export interface Books{
  id: number;
  title: string;
  author: string;
  publisher: string;
  genre: string;
  ibsn: number;
  date: string;
  loanStatus: boolean;
}

let books: Books[] = [
  {id: 1, title: "The Future of War", author: "Janet Sims", publisher: "Harper Collins", genre: "Fiction", ibsn: 439821, date: "June 22 1987",loanStatus: true },
  {id: 2, title: "The Shadow of War", author: "Diana Clause", publisher: "Simon and Sam", genre: "Fiction", ibsn: 827623, date: "June 22 1987",loanStatus: true },
  {id: 3, title:"Homeland Security", author: "Billy Jean",publisher:"Penguin House", genre: "Non-Fiction", ibsn: 8272892, date: "June 22 1987",loanStatus: false},
  {id: 4, title: "Python", author: "Jonathan Lumberton",publisher: "Ducks Enterprise", genre: "Non-Fiction", ibsn: 827263, date: "June 22 1987",loanStatus: false},
  {id: 5, title: "JavaScript",author: "Jack Henry", publisher:"Parks & Parks", genre: "Non-Fiction", ibsn: 6246372, date: "June 22 1987" ,loanStatus: true}
]
app.use(express.json());

// app.get("/api/hello", (req, res) => {
//   res.send(output).end();
// });
//

//



//GET
app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/books2', (req, res) => {
  res.send(books)
  // res.json(books);
})

app.get('/books3', (req, res) => {
  res.json(books)
});



// app.get('/books/:id', (req ,res) => {
//   const id = parseInt(books.params.id);
//   const book = books.find((book) => book.id === id);
//   if (book) {
//     res.json(book);
//   } else {
//     res.status(404).json({ message: `Book with ID ${id} not found` });
//   }
// });


//POST
// get.post('/books', )


app.post('/books', (req, res) => {
  const { title, author, publisher, genre, ibsn, date, loanStatus } = req.body;
  const id = books.length + 1;
  const newBook: Books = { id, title, author, publisher, genre, ibsn, date, loanStatus };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.post('/books2', (req, res) => {
  let booksToAdd = req.body; // Access the body (payload) of the request
  books.push(booksToAdd);
  res.send(books);
})

//PUT

app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, publisher, genre, ibsn, date, loanStatus } = req.body;
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    const updatedBook: Books = { id, title, author, publisher, genre, ibsn, date, loanStatus };
    books[bookIndex] = updatedBook;
    res.json(updatedBook);
  } else {
    res.status(404).json({ message: `Book with ID ${id} not found` });
  }
});



//PATCH

// app.patch('/books/:id', (req, res) => {
//
//   const {  id  } = req.params as {id: string};
//   // const { id } = books.id;
//   const {title } = req.body as {title:string};
//
//   books.forEach((book, index) => {
//     if (book.id == id) {
//       books[index].title = title;
//     }
//   });
//   const justAdded = books.find(book => book.id == id);
//   res.send(justAdded);
// })


//DELETE


// app.delete('/books/:id', (req, res) => {
//   let { id } = req.params;
//   let updatedBooks = books.filter(book => books.id != id);
//   books = updatedBooks;
//
//   res.send("Resource has been deleted.")
// })
//
//



app.use('/', express.static(path.resolve(__dirname, 'client')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});


server.listen(8080);