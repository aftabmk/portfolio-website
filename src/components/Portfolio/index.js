import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import db from '../Backend/config'
import { onSnapshot ,collection } from 'firebase/firestore'


const Portfolio = () => {
    useEffect(()=>{setTimeout(()=>{return setLetterClass('text-animate-hover')},4000)},[])
    const [letterClass,setLetterClass] = useState('text-animate')
  
    const [port, setport] = useState([])
    useEffect(() => {
        onSnapshot(collection(db,'data'),(data)=>
        {
            setport(data.docs.map(doc=>doc.data()))
        })
    }, [])
    
    const renderPortfolio =(port) =>
    {
        return(
                <div className="images-container">
                {
                    port.map((port,idx)=>
                    {
                        return(
                            <div className="image-box" key={idx}>
                                <img src={port.cover} alt="portfolio" className='portfolio-image' />
                                <div className="content">
                                <p className="title">{port.title}</p>
                                <h4 className="discription">{port.discription}</h4>
                                <button className="button" onClick={()=>window.open(port.url)}>View</button>
                                </div>
                            </div>
                                )
                    })
                }
                </div>
            )
    }

    return ( 
        <div>
        <div className="contain portfolio-page">
            <div className="text">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx={15} 
                    />
                </h1>
                <div>{renderPortfolio(port)}</div>
            </div>
        </div>
        <Loader type='pacman'/>
        </div>
     );
}
 
export default Portfolio;