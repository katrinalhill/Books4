import React, { useContext, useState } from 'react';
import { BookContext } from '../Component/BookContextProvider';

interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
}

export const Search= () =>{
  const { books } = useContext(BookContext);
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredBooks: Book[] = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <br/>
      <input className = "search-input" type="text" placeholder="Search by title or author" onChange={handleChange} />
      <br/>
      {filteredBooks.length > 0 ? (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <div className="book" key={book.id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Publisher: {book.publisher}</p>
              <button className="BookButton">Add to Cart</button>
              <br/>
          <br/>
          <button className="BookButton">Remove from Cart</button>
            </div>
            
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};








// import React, { useContext, useState } from 'react';
// import { BookContext } from './BookContext';

// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   publishedDate: string;
// }

// const Search = () => {
//   const { books } = useContext(BookContext);
//   const [query, setQuery] = useState('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(event.target.value);
//   };

//   const filteredBooks: Book[] = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(query.toLowerCase()) ||
//       book.author.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <>
//       <input type="text" placeholder="Search by title or author" onChange={handleChange} />
//       {filteredBooks.length > 0 ? (
//         filteredBooks.map((book) => (
//           <div key={book.id}>
//             <h2>{book.title}</h2>
//             <p>Author: {book.author}</p>
//             <p>Published: {book.publishedDate}</p>
//           </div>
//         ))
//       ) : (
//         <p>No results found.</p>
//       )}
//     </>
//   );
// };

// export default Search;