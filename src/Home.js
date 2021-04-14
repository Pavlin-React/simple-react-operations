const Home = () => {

    let handleClick = ( e ) => {
        console.log("Hello ninjas", e);
    }

    let handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
    }

    return (
        <div className='home'>
            <h1>Homepage</h1>
            <button onClick={ handleClick }>Click Me</button>
            <button onClick={ ( e ) => handleClickAgain('Mario', e) }>Click Again</button>
        </div>
    );
}
 
export default Home;