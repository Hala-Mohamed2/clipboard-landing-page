import './Home.css';


const Home = () => {
  return(
    <div className="home">
      <h1>A history of everything you copy</h1>
      <p>Clipboard allows you to track and organize everything you 
      copy. Instantly access your clipboard on all your devices.</p>
      <div className="buttns">
        <button className='ios'>Download for iOS</button>
        <button className='mac'>Download for Mac</button>
      </div>
    </div>
  )
}



export default Home;