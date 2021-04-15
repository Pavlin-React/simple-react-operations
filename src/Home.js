import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  let [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum', author: 'mario', id: 1 },
    { title: 'Welcome party', body: 'second ipsum', author: 'yoshi', id: 2 },
    { title: 'Web dev top pics', body: 'third ipsum', author: 'mario', id: 3 }
  ]) 

  let handleDelete = ( id ) => {
    let newBlogs = blogs.filter( ( blog ) => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div className='home'>
      <BlogList blogs={ blogs } title ='Liverpool' handleDelete= { handleDelete } />
    </div>
  );
}

export default Home;