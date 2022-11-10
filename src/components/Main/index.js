import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
    {posts.map((postData) => {
      console.log(postData.image.link, postData.image.alt)
      return <Post 
      key={postData.postId}
      title={postData.title} 
      date={postData.date} 
      author={postData.author}
      text={postData.text}
      highlights={postData.highlights.map((highlightedItem) => {
        console.log(highlightedItem)
        return <li 
        text ={highlightedItem}>
        </li>
        
      })}
      src={postData.image.link}
      alt={postData.image.alt} />
    })}
  </main>;


}

export default Main;
