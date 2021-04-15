import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  let [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum', author: 'mario', id: 1 },
    { title: 'Welcome party', body: 'second ipsum', author: 'yoshi', id: 2 },
    { title: 'Web dev top pics', body: 'third ipsum', author: 'mario', id: 3 }
  ]) 

  let [name, setName] = useState('mario')


  let handleDelete = ( id ) => {
    let newBlogs = blogs.filter( ( blog ) => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect( () => {
    console.log('just useEffect');
    console.log(name);
  }, [name] )

  return (
    <div className='home'>
      <BlogList blogs={ blogs } title ='Liverpool' handleDelete= { handleDelete } />
      <button onClick={ () => setName('luigi') }>Change Name</button>
      <p>{ name }</p>
    </div>
  );
}

export default Home;