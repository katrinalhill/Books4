import http from "http";
import express, { Request, Response } from 'express';
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

export interface Library{
  id: number,
  name: string;
  address: string;
  books: string[];
  employees: string[];
  isOpen: boolean;
};

let library: Library[] = [
  {
    id:1,
    name: 'Central Library',
    address: '123 Main St, Anytown USA',
    books: ['The Great Gatsby', 'To Kill a Mockingbird', '1984'],
    employees: ['John Smith', 'Jane Doe', 'Bob Johnson'],
    isOpen: true,
  },
  {
    id:2,
    name: 'North Branch Library',
    address: '456 Maple Ave, Anytown USA',
    books: ['The Catcher in the Rye', 'Pride and Prejudice', 'The Odyssey'],
    employees: ['Samantha Brown', 'David Lee', 'Mary White'],
    isOpen: false,
  },
  {
    id:3,
    name: 'South Branch Library',
    address: '789 Oak St, Anytown USA',
    books: ['Moby Dick', 'Jane Eyre', 'The Adventures of Huckleberry Finn'],
    employees: ['Tom Jones', 'Lisa Patel', 'Mike Davis'],
    isOpen: true,
  },
  {
    id:4,
    name: 'East Branch Library',
    address: '321 Pine St, Anytown USA',
    books: ['The Sun Also Rises', 'Wuthering Heights', 'The Count of Monte Cristo'],
    employees: ['Amy Chen', 'Juan Rodriguez', 'Tina Nguyen'],
    isOpen: true,
  },
  {
    id:5,
    name: 'West Branch Library',
    address: '654 Cedar St, Anytown USA',
    books: ['Frankenstein', 'The Scarlet Letter', 'The Picture of Dorian Gray'],
    employees: ['Bill Johnson', 'Karen Smith', 'Jose Ramirez'],
    isOpen: false,
  },
];

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send(output).end();
});






////GET BOOKS EXAMPLES
app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/books2', (req: Request, res: Response) => {
  res.send(books);
});

//// GET A BOOK BY ID
app.get('/books/:id', (req: Request, res: Response) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send('The book with the given ID was not found.');
    return;
  }
  res.send(book);
});

// POST a new book
app.post('/books', (req: Request, res: Response) => {
  const book: Books = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    genre: req.body.genre,
    ibsn: req.body.ibsn,
    date: req.body.date,
    loanStatus: false
  };
  books.push(book);
  res.send(book);
});

// PUT update a book by ID
app.put('/books/:id', (req: Request, res: Response) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send('The book with the given ID was not found.');
    return;
  }
  book.title = req.body.title;
  book.author = req.body.author;
  book.publisher = req.body.publisher;
  book.genre = req.body.genre;
  book.ibsn = req.body.ibsn;
  book.date = req.body.date;
  book.loanStatus = req.body.loanStatus;
  res.send(book);
});


//patch
app.patch('/books/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updates = req.body as Books;

  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    res.status(404).send('Book not found');
    return;
  }

  const updatedBook: Books = { ...books[index], ...updates };
  books[index] = updatedBook;

  res.send(updatedBook);
});

//Delete Book

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send('The book with the given ID was not found.');
    return;
  }
  const index = books.indexOf(book);
  books.splice(index, 1);
  res.send(book);
});



///////////////////////////////////////////////////

///////////////////////////////////////////////////



// Get all libraries
app.get('/library', (req: Request, res: Response) => {
  res.json(library);
});

// Get library by ID
app.get('/library/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  res.json(library[id]);
});



// Add a new library
app.post('/library', (req: Request, res: Response) => {
  const libraries: Library = {
    id: library.length + 1,
    name: req.body.name,
    address: req.body.address,
    books: req.body.books,
    employees: req.body.employees,
    isOpen: req.body.isOpen,
  };
  library.push(libraries);
  res.send(library);
});

//Update a library by index /// put
app.put('/library/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const updatedLibrary: Library = req.body;
  library[id] = updatedLibrary;
  res.json(updatedLibrary);
});



// Define your PATCH endpoint to update a library's isOpen status
app.patch('/library/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const libraryIndex = library.findIndex(library => library.id === id);
  if (libraryIndex === -1) {
    return res.status(404).json({ message: `Library with id ${id} not found.` });
  }
  const updatedLibrary = { ...library[libraryIndex], isOpen: req.body.isOpen };
  library[libraryIndex] = updatedLibrary;
  return res.json(updatedLibrary);
});




app.delete('/library/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.index);
  library.splice(id, 1);
  res.json({ message: 'Library deleted' });
});


///libraries alternate to test out different paths
app.get("/libraries/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const libraries = library.find((l) => l.id === id);
  if (library) {
    res.json(library);
  } else {
    res.status(404).json({ message: "Library not found" });
  }
});

// POST /libraries - Create a new library
app.post("/libraries", (req, res) => {
  const libraries: Library = req.body;
  libraries.id = library.length + 1;
  library.push(libraries);
  res.json(library);
});




// PUT /libraries/:id - Update a library by ID
app.put("/libraries/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = library.findIndex((l) => l.id === id);
  if (index !== -1) {
    library[index] = { ...library[index], ...req.body };
    res.json(library[index]);
  } else {
    res.status(404).json({ message: "Library not found" });
  }
});

//Delete a library by index
app.delete('/library/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.index);
  library.splice(id, 1);
  res.json({ message: 'Library deleted' });
});


app.use('/', express.static(path.resolve(__dirname, 'client')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});


server.listen(8080);










// /POST
// // get.post('/books', )


// app.post('/books', (req, res) => {
//   const { title, author, publisher, genre, ibsn, date, loanStatus } = req.body;
//   const id = books.length + 1;
//   const newBook: Books = { id, title, author, publisher, genre, ibsn, date, loanStatus };
//   books.push(newBook);
//   res.status(201).json(newBook);
// });

// app.post('/books2', (req, res) => {
//   let booksToAdd = req.body; // Access the body (payload) of the request
//   books.push(booksToAdd);
//   res.send(books);
// })

// //PUT

// app.put('/books/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const { title, author, publisher, genre, ibsn, date, loanStatus } = req.body;
//   const bookIndex = books.findIndex((book) => book.id === id);
//   if (bookIndex !== -1) {
//     const updatedBook: Books = { id, title, author, publisher, genre, ibsn, date, loanStatus };
//     books[bookIndex] = updatedBook;
//     res.json(updatedBook);
//   } else {
//     res.status(404).json({ message: `Book with ID ${id} not found` });
//   }
// });



// //PATCH

// // app.patch('/books/:id', (req, res) => {
// //
// //   const {  id  } = req.params as {id: string};
// //   // const { id } = books.id;
// //   const {title } = req.body as {title:string};
// //
// //   books.forEach((book, index) => {
// //     if (book.id == id) {
// //       books[index].title = title;
// //     }
// //   });
// //   const justAdded = books.find(book => book.id == id);
// //   res.send(justAdded);
// // })


// //DELETE


// // app.delete('/books/:id', (req, res) => {
// //   let { id } = req.params;
// //   let updatedBooks = books.filter(book => books.id != id);
// //   books = updatedBooks;
// //
// //   res.send("Resource has been deleted.")
// // })
// //
// //


// app.post('/library', (req: Request, res: Response) => {
//   const newLibrary: Library = req.body;
//   library.push(newLibrary);
//   res.json(newLibrary);
// });