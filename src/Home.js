import { useState } from 'react'

const Home = () => {

  let [name, setName] = useState('Mario')
  let [age, setAge] = useState(25)

  let handleClick = () => {
    setName('Luigi')
    setAge(30)
  }

  return (
    <div className='home'>
      <h1>Homepage</h1>
      <p>{ name } is { age } years old</p>
      <button onClick={ handleClick }>Click Me</button>
    </div>
  );
}

export default Home;