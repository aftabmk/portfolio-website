import { collection, onSnapshot } from 'firebase/firestore';
import { faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import db from '../Backend/config'
import AnimatedLetters from '../AnimatedLetters';
import firebase from './../../assets/images/firebase.png'
import solidity from './../../assets/images/solidity.png'
import mongod from './../../assets/images/mongod.png'
import tailwind from './../../assets/images/tailwind.png' 
import './index.scss'
import Loading from '../Loading/Loading';
import Loader from 'react-loaders';



const About = () => {
    useEffect(() => { setTimeout(() => { return setLetterClass('text-animate-hover') }, 3000) }, [])

    const [letterClass, setLetterClass] = useState('text-animate')
    // firebase

    const [about, setAbout] = useState([])
    console.log(about)
    useEffect(() => { onSnapshot(collection(db, 'about'), (data) => { setAbout(data.docs.map(doc => doc.data())) }) }, [])
    // console.log(about)
    if(!about) return <Loader />
    
    return (
        <div>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"ABOUT ME".split("")}
                            idx={15}
                        />
                    </h1>
                    {
                        about.map((elem, idx) =>
                        (
                            <p key={idx}>{elem.text}</p>
                        ))
                    }
                </div>
                <div className="stage-cube-count">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face2">
                            <img src={mongod} alt="" />
                        </div>
                        <div className="face3">
                            <img src={tailwind} alt="" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <img src={firebase} alt="" />
                        </div>
                        <div className="face6">
                            <img src={solidity} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;