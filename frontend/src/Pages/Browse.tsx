import React, { useContext } from 'react';
import {BookContext} from "../Component/BookContextProvider";

interface BookProps {}


interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  genre: string
}

export const Browse = (props: BookProps) =>{

  const { books } = useContext(BookContext);

  return(
    <>
      <h1 className ="BrowseHeader">List of Books</h1>
      <div className ="BookList">
      {books.map((book: Book, i: number) => (
        <div className ="Book" key={i}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Publisher: {book.publisher}</p>
          <p> Genre: {book.genre}</p>  
          <button className="BookButton">Add to Cart</button>
          <br/>
          <br/>
          <button className="BookButton">Remove from Cart</button>

        </div>
      ))}
      </div>
    </>
  )
}