import React from 'react';
import {Link} from "react-router-dom";

//Add functionality so the `Home` button on the `SavedList` component navigates back to home.

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">Home</div>
    <Link to = "/">Home</Link>
  </div>
);

export default SavedList;
