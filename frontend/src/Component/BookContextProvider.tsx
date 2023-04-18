import React, { useEffect, useState,createContext, ReactNode } from "react";


interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  genre: string
}

interface BookContextType {
  books: Book[];
}

interface BookContextProviderProps {
  children: ReactNode;
}
export const BookContext = createContext<BookContextType>({ books: [] });


export const BookContextProvider = ({ children }: BookContextProviderProps) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('/books')
      .then((res) => res.json())
      .then((data: Book[]) => setBooks(data))
      .catch((err: Error) => console.error(err));
  }, []);

  console.log(books);

  return(
    <>
    <BookContext.Provider value={{ books }}>
      {children}
    </BookContext.Provider>
    </>
  );
};


{/* <>
<h1>List of Books</h1>
{books.map((book: Book, i: number) => (
  <div key={i}>
    <h2>{book.title}</h2>
    <p>Author: {book.author}</p>
    <p>Publisher: {book.publisher}</p>
    <p> Genre: {book.genre}</p>
  </div>
))}
</> */}
// export const Fetches = () => {
//   // const [books, setBooks] = useState ([]);
// //
//   const [books, setBooks] = useState<T | null>(null);
//   const urlBooks = '/books'
// //
//   useEffect(() => {
//     fetch(urlBooks)
//       .then((res) => res.json())
//       .then((data) => setBooks(data))
//       .catch((err) => console.error(err));
//   }, []);
// //
//  console.log(books)
// //   console.log(books.map(el,i))
//   return(
//     <>
//       <h1>books.map((book:B => {})</h1>
//     </>
//   )
// }

 // books.map((book: Book) => {   console.log(book.title);
 // });




//  export const useAPIGet = <T>(url: string, params?: { [key:string]: string | number | boolean;} ) => {
//   const [data, setData] = useState<T | null>(null);
//   const [error, setError] = useState(null);

//   const fetchData = () => {
//     getData(url, params)
//       .then(async response => {
//         return await parseBackendResponse<T>(response);
//       })
//       .then((data)=>{
//         setData(data);
//       })
//       .catch(error => {
//         setError(error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, [url]);

//   const refreshData = () => {
//     fetchData();
//   }

//   return {error, data, refreshData};
// };