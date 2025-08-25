import './Workflow.css';


const items = [
  {
    img: './images/icon-blacklist.svg',
    title: 'Create blacklists',
    desc: 'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.',
  },
  {
    img: './images/icon-text.svg',
    title: 'Plain text snippets',
    desc: 'Remove unwanted formatting from copied text for a consistent look.',
  },
  {
    img: './images/icon-preview.svg',
    title: 'Sneak preview',
    desc: 'Quick preview of all snippets on your Clipboard for easy access.',
  },
]



const Workflow = () => {
  return(
    <div className="work">
      <div className="title">
        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
      </div>
      <div className="row">
          {items.map((item , index) =>(
            <div className="col">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
      </div>
      <div className="icons">
        <img src="./images/logo-google.png" alt="" />
        <img src="./images/logo-ibm.png" alt="" />
        <img src="./images/logo-microsoft.png" alt="" />
        <img src="./images/logo-hp.png" alt="" />
        <img src="./images/logo-vector-graphics.png" alt="" />
      </div>
    </div>
  )
}



export default Workflow;