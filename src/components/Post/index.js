import React from 'react';

import './index.css';

function Post(props) {
  return <article>
    <p>Title: {props.title}</p> 
    <p>date: {props.date}</p>
    <p>Author: {props.author}</p>
    <p>Text: {props.text}</p>
    <p>Highlights: {props.highlights}</p>
    <p><img src={props.src} alt={props.alt} /> </p>
  </article>;
}

export default Post;
