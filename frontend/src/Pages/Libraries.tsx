import React, { useContext } from 'react';
import { LibraryContext} from '../Component/LibraryProvider';


interface Library {
  name: string;
  address: string;
  books: string[];
  employees: string[];
  isOpen: boolean;
};

export const Libraries = () => {
  const { library } = useContext(LibraryContext);

  return (
    <div className="library-container"> {/* add a class name to the container div */}
      {library.map((library: Library, index: number) => (
        <div className="library-card" key={index}> {/* add a class name to the card div */}
          <h2>{library.name}</h2>
          <p>{library.address}</p>
          <p>{library.books.join(', ')}</p>
          <p>{library.employees.join(', ')}</p>
          <p>{library.isOpen ? 'Open' : 'Closed'}</p>
        </div>
      ))}
    </div>
  );
};

