import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: ""
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
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: ""
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
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: ""
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
    ]
  };

  render() {
    return (
      <ul>
        {this.state.posts.map( post => (
          
          <PostItem key={post.id} {...post}/>
        ))}
      </ul>
    );
  }
}

export default PostList;