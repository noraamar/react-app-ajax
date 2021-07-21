import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Post from './Post';
import Form from './Form';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
  })

  const getData = () => {
    axios.get('http://localhost:3001/posts')
      .then(posts => {
        setData(posts.data)
      })
  }

  const postData = (post) => {
    axios.post('http://localhost:3001/posts', post)
    .then(posts => {
      console.log(posts.data)
      setData([...data, posts.data])
    })
  }

  const deletePost = (id) => {
    console.log(id);
    axios.delete('http://localhost:3001/posts/' +id)
    .then(posts => {
      console.log(posts)
      getData()
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <Form postData={postData}/>
        <button onClick={getData}>Get Data</button>
        <button onClick={postData}>Add Data</button>
        {
          data.map(element => (
            <Post post={element} deletePost={deletePost}/>
          ))
        }
      </header>
    </div>
  );
}

export default App;
