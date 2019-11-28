import React from 'react'



function HeaderPost({  name, avatar, date }) {

  return (
    <div className="post-header">
      <div className="post-details">
        <img src={avatar} className="profile" alt="profile" />
        <span className="author">{name}</span>
      </div>      
      <p className="data">{date}</p>
    </div>
  );
}

function Comments(comments) {
  return(
    <div className="comments">
      <ul>
        {comments.map(comment => Comment({...comment}))}
      </ul>
    </div>
  );
}

function Comment({ id, content, author }) {
  const {name, avatar} = author;
  
  return (
    <li key={id}>
      <img src={avatar}/>
      <div className="comment-content">
        <span>{name}</span>
        <p>{content}</p>
      </div>
      
    </li>
  );
}



function PostItem ({ author, date, content, comments}) {
  console.log(content);
  return (
    <li className="post">
      {HeaderPost({...author, date})}
      
      <p className="post-content">{content}</p>
      
      {Comments(comments)}
      
    </li>
    
  );
}


export default PostItem;