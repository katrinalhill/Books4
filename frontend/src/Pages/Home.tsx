import React, { useEffect, useState, useContext } from "react";

import {Fetches} from "../Component/BookContextProvider";
export const Home= () =>{

  return(
    <div className="home-page-container">
      <h1 className="home-page-header">Welcome to The Orange Room</h1>
      <p className="home-page-text">
        Browse our collection of books and find your next favorite read!
      </p>
      <button className="home-page-button">Get Started</button>
    </div>
  )
}