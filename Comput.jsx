import './Comput.css';



const Comput = () => {
  return(
    <div className="comput">
      <div className="title">
        <h1>Keep track of your snippets</h1>
        <p>Clipboard instantly stores any item you copy in the cloud, 
        meaning you can access your snippets immediately on all your 
        devices. Our Mac and iOS apps will help you organize everything.</p>
      </div>
      <div className="cup">
        <img src="./images/image-computer.png" alt="" />
        <div className="cols">
          <div className="col">
            <h3>Quick Search</h3>
            <p>Easily search your snippets by content, category, web address, application, and more.</p>
          </div>
          <div className="col">
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </div>
          <div className="col">
            <h3>Complete History</h3>
            <p>Retrieve any snippets from the first moment you started using the app.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Comput;