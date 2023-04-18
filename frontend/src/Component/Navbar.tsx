import React from "react";
import List from '@mui/material/List';
import {Link} from "react-router-dom";


export const Navbar= () =>{


  return(
    <>
<div className = "sidebar">
      <Link to={`/`}>
    <List> Home </List>
      </Link>

      <Link to={`/search`}>
        <List> Search </List>
      </Link>

      <Link to={`/browse`}>
        <List> Browse</List>
      </Link>

      <Link to={`/newrelease`}>
        <List>New Releases</List>
      </Link>

      <Link to={`/library`}>
        <List>Library Locations</List>
      </Link>

      <Link to={`/aboutus`}>
        <List>About Us</List>
      </Link>

      <Link to={`/cart`}>
        <List>Cart</List>
      </Link>


      <Link to={`/login`}>
        <List>Login</List>
      </Link>

      </div>
    </>
    )
}