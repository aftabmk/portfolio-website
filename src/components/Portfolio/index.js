import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import db from '../Backend/config'
import { onSnapshot, collection } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading';


const Portfolio = () => {

    const [desktop, setDesktop] = useState(window.innerWidth > 768)
    const media = () => setDesktop(window.innerWidth > 768)
    useEffect(() => { window.addEventListener('resize', media); return () => window.removeEventListener('resize', media) })

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => { setTimeout(() => { return setLetterClass('text-animate-hover') }, 4000) }, [])

    const [port, setport] = useState([])
    const [current, setCurrent] = useState(0)
    useEffect(() => { onSnapshot(collection(db, 'data'), (data) => { setport(data.docs.map(doc => doc.data())) }) }, [])

    useEffect(() => {
        desktop && 
        setTimeout(() => {
            setCurrent(current === length - 1 ? 0 : current + 1)
            console.log("change")
        }, 15000)
    })
    const length = port.length

    // if (!Array.isArray(port) || port.length <= 0) {
    //     return null
    // }

    //functions

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    // console.log(current)

    if(!port) return <Loading />

    const renderPortfolio = (port) => {

        return (
            <>
                { !desktop && 
                    <div className="images-container">
                    {
                        port.map((port, idx) => {
                            return (
                                <div className="image-box" key={idx}>
                                    <img src={port.cover} alt="portfolio" className='portfolio-image' />
                                    <div className="content">
                                        <a href={port.url} target='_blank' className='a-slider'>
                                            <p className="title">{port.title}</p>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>}
                { desktop && 
                    <div className="slider">
                    <FontAwesomeIcon icon={faChevronLeft} className='left-arrow' onClick={nextSlide} />
                    <FontAwesomeIcon icon={faChevronRight} className='right-arrow' onClick={nextSlide} />
                    {
                        port.map((port, idx) => {
                            return (
                                <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
                                    {idx === current &&
                                        (<>
                                            <img src={port.cover} alt="portfolio" className='image' />
                                            <div className="content">
                                                <a href={port.url} target='_blank' className='a-slider'>
                                                    <p className='p-link'>{port.title}</p>
                                                </a>
                                            </div>
                                        </>
                                        )}
                                </div>
                            )
                        })
                    }
                </div>}
            </>
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
        </div>
    );
}

export default Portfolio;