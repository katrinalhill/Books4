"use strict";
// import express, { Request, Response } from 'express';
// import mysql from 'mysql';
// // Define the Library data entity
// interface Library {
//   name: string;
//   address: string;
//   books: string[];
//   employees: string[];
//   isOpen: boolean;
// }
// // Create a MySQL connection pool
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'library',
//   connectionLimit: 10,
// });
// // Create an Express.js app
// const app = express();
// app.use(express.json());
// // Define the API endpoints for CRUD operations on the Library data
// // GET /library
// app.get('/library2', async (req: Request, res: Response) => {
//   try {
//     // Fetch all Library records from the database
//     const [rows] = await pool.query<Library[]>('SELECT * FROM library');
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }
// });
// // GET /library/:id
// app.get('/library/:id', async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   try {
//     // Fetch a single Library record by ID from the database
//     const [rows] = await pool.query<Library[]>('SELECT * FROM library WHERE id = ?', [id]);
//     if (rows.length === 0) {
//       res.status(404).send('Library record not found');
//     } else {
//       res.json(rows[0]);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }
// });
// // POST /library
// app.post('/library', async (req: Request, res: Response) => {
//   const library = req.body;
//   try {
//     // Insert a new Library record into the database
//     const [result] = await pool.query('INSERT INTO library SET ?', [library]);
//     res.status(201).json({ id: result.insertId });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }
// });
// // PUT /library/:id
// app.put('/library/:id', async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   const library = req.body;
//   try {
//     // Update an existing Library record in the database
//     const [result] = await pool.query('UPDATE library SET ? WHERE id = ?', [library, id]);
//     if (result.affectedRows === 0) {
//       res.status(404).send('Library record not found');
//     } else {
//       res.status(204).end();
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }
// });
// // DELETE /library/:id
// app.delete('/library/:id', async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   try {
//     // Delete a Library record from the database
//     const [result] = await pool.query('DELETE FROM library WHERE id = ?', [id]);
//     if (result.affectedRows === 0) {
//       res.status(404).send('Library record not found');
//     } else {
//       res.status(204).end();
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }
// });
// // Start the Express
