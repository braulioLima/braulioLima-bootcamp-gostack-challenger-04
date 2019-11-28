import React from 'react'

import propTypes from 'prop-types';


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

      <div className="line-divisor"></div>
      
      {Comments(comments)}
      
    </li>
    
  );
}

/**
 * Default props
 */
PostItem.defaultProps = {
  author: {
    name: "Julio Alcantara",
    avatar: '../assets/user-logo.svg',
  },
  date: "04 Jun 2019",
  content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
  comments: [
    {
      id: 1,
      author: {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
      },
      content: "A Rocketseat está sempre em busca de novos membros, geralmente ficamos de olho nos alunos que se destacam no bootcamp, inclusive 80% dos nossos devs são ex-alunos"
    }
  ]
}

/**
 * Prop-types
 */
PostItem.propTypes = {
  author: propTypes.object,
  date: propTypes.string,
  content: propTypes.string,
  comements: propTypes.array,
}


export default PostItem;