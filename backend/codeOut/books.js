"use strict";
// import mysql from 'mysql';
// interface Books {
//   id: number;
//   title: string;
//   author: string;
//   publisher: string;
//   genre: string;
//   ibsn: number;
//   date: string;
//   loanStatus: boolean;
// }
// // Create a connection to the MySQL database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'yourusername',
//   password: 'yourpassword',
//   database: 'yourdatabase',
// });
// // Connect to the database
// connection.connect();
// // Create a table to store the books (if it doesn't already exist)
// connection.query(
//   `CREATE TABLE IF NOT EXISTS books (
//     id INT(11) NOT NULL AUTO_INCREMENT,
//     title VARCHAR(255) NOT NULL,
//     author VARCHAR(255) NOT NULL,
//     publisher VARCHAR(255) NOT NULL,
//     genre VARCHAR(255) NOT NULL,
//     ibsn INT(11) NOT NULL,
//     date DATE NOT NULL,
//     loanStatus BOOLEAN NOT NULL,
//     PRIMARY KEY (id)
//   )`,
//   (error) => {
//     if (error) throw error;
//     console.log('Books table created or already exists!');
//   }
// );
// // Create a new book
// const createBook = (book: Books) => {
//   connection.query('INSERT INTO books SET ?', book, (error) => {
//     if (error) throw error;
//     console.log('Book created successfully!');
//   });
// };
// // Get all books
// const getBooks = () => {
//   connection.query('SELECT * FROM books', (error, results) => {
//     if (error) throw error;
//     console.log(results);
//   });
// };
// // Get a single book by ID
// const getBookById = (id: number) => {
//   connection.query(
//     'SELECT * FROM books WHERE id = ?',
//     id,
//     (error, result) => {
//       if (error) throw error;
//       console.log(result);
//     }
//   );
// };
// // Update a book by ID
// const updateBook = (id: number, book: Books) => {
//   connection.query(
//     'UPDATE books SET ? WHERE id = ?',
//     [book, id],
//     (error) => {
//       if (error) throw error;
//       console.log('Book updated successfully!');
//     }
//   );
// };
// // Delete a book by ID
// const deleteBook = (id: number) => {
//   connection.query('DELETE FROM books WHERE id = ?', id, (error) => {
//     if (error) throw error;
//     console.log('Book deleted successfully!');
//   });
// };
// // Close the connection to the database when the app exits
// process.on('exit', () => {
//   connection.end();
// });
// // Example usage:
// createBook({
//   id: 6,
//   title: 'The Art of War',
//   author: 'Sun Tzu',
//   publisher: 'Penguin Classics',
//   genre: 'Non-Fiction',
//   ibsn: 123456,
//   date: 'January 1 2000',
//   loanStatus: false,
// });
// getBooks();
// getBookById(3);
// updateBook(3, {
//   id: 3,
//   title: 'Homeland Security: Second Edition',
//   author: 'Billy Jean',
//   publisher: 'Penguin House',
//   genre: 'Non-Fiction',
//   ibsn: 8272892,
//   date: 'June 22 1987',
//   loanStatus: true,
// });
// deleteBook(6);
