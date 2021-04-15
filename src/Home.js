import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  let [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum', author: 'mario', id: 1 },
    { title: 'Welcome party', body: 'second ipsum', author: 'yoshi', id: 2 },
    { title: 'Web dev top pics', body: 'third ipsum', author: 'mario', id: 3 }
  ]) 

  return (
    <div className='home'>
      <BlogList blogs={ blogs } title ='Liverpool' />
    </div>
  );
}

export default Home;