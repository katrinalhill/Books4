import React, { useEffect, useState, useContext } from "react";


export const Home= () =>{

  return(
    <div className="home-page-container">
      <h1 className="home-page-header">Welcome to The Orange Room</h1>
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