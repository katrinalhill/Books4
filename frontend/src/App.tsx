import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./Component/Navbar";
import {Header} from "./Component/Header";
import {Home} from "./Pages/Home";
import {Browse} from "./Pages/Browse";
import {Libraries} from "./Pages/Libraries";
import {NewReleases} from "./Pages/NewReleases";
import {Search} from "./Pages/Search";
import {AboutUs} from "./Pages/AboutUs";
import {Fetches} from "./Component/Fetches";

function App() {
  return (
    <div className="App">
      <Router>
        <Fetches/>
      <Header/>
      <Navbar/>
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path = "/browse" element= {<Browse/>}/>
          <Route path = "/library" element= {<Libraries/>}/>
          <Route path = "/newrelease" element= {<NewReleases/>}/>
          <Route path = "/search" element= {<Search/>}/>
          <Route path = "/aboutus" element= {<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
