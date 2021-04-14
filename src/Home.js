import { useState } from 'react'

const Home = () => {
  let [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum', author: 'mario', id: 1 },
    { title: 'Welcome party', body: 'second ipsum', author: 'yoshi', id: 2 },
    { title: 'Web dev top pics', body: 'third ipsum', author: 'mario', id: 3 }
  ]) 

  return (
    <div className='home'>
      { blogs.map( ( blog ) => (
        <div className='blog-preview' key = { blog.id }>
          <h2>{ blog.title }</h2>
          <p>Writen by { blog.author }</p>
        </div>
      ) ) }
    </div>
  );
}

export default Home;