import React, { useEffect, useState, useContext } from "react";
import {BookContext} from "../Component/BookContextProvider";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface BookProps {}

interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  genre: string
}

export const Home= (props:BookProps) =>{
  // const { books } = useContext(BookContext);
  // const [query, setQuery] = useState<string>('');
  // const navigate = useNavigate();

  // let filteredBooks: Book[] = [];


  
  // const favChecker = (title: string, ctx: Context): boolean => {
  //   const isFavorite = books.some(
  //     (books) => books.title === title
  //   );
  //   return isFavorite;
  // };
  
  // const addToFavorites = (books: Books, ctx: Context): void => {
  //   const oldFavorites = [...books];
  //   const newFavorites = oldFavorites.concat(books);
  
  //   books(newFavorites);
  // };
  
  // const removeFromFavorites = (name: string, ctx: Context): void => {
  //   const oldFavorites = [...books];
  //   const newFavorites = oldFavorites.filter(
  //     (character) => character.name !== name
  //   );
  
  //   books(newFavorites);
  // };
  
  // let filteredBooks: Books[] = [];
  
  // if (query) {
  //   filteredBooks = books.filter((el: Books) => {
  //     return el.title.toLowerCase().includes(query.toLowerCase());
  //   });
  // }
  
  // let bookResults: Book[] = query
  //   ? filteredBooks
  //   : books;
  
  

  

  return(
    <div className="home-page-container">
      <h1 className="home-page-header">Welcome to The Orange Room BookStore</h1>
      <br/>
      <div className="home-page-text">
        Browse our collection of books and find your next favorite read!
      </div>
      <br/>
      <form>
  <input type="text" placeholder="Search..."/>
  <button type="submit">Search </button>
</form>
    </div>
  )
}