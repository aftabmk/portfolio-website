import {  faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import firebase from './../../assets/images/firebase.png'
import solidity from './../../assets/images/solidity.png'
import mongod from './../../assets/images/mongod.png'
import tailwind from './../../assets/images/tailwind.png'



const About = () => {
    useEffect(()=>{setTimeout(()=>{return setLetterClass('text-animate-hover')},3000)},[])
    
    const [letterClass,setLetterClass] = useState('text-animate')    
    

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
                <p>
                    Hi I'am a junior web developer who is well versed with HTML,CSS,JavaScript.
                </p>
                <p>
                    I am passionate about developing website using react js using modern features like Hooks and ES6 syntax.
                </p>
                <p>    
                    Who has a moderate expertise in Express Js for creating API or serving data to MongoDB using mongoose JS.
                </p >
                <p>
                    Well versed with neuanced languages like Solidity to create etherium based blockchain contracts.
                    Web designing can be also optimised with SCSS or Tailwind CSS
                </p>
            </div>
            <div className="stage-cube-count">
                <div className="cube-spinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
		            <div className="face2">
                        <img src={mongod}  alt="" />
                    </div>
		            <div className="face3">
                        <img src={tailwind}  alt="" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <img src={firebase}  alt="" />
                    </div>
                    <div className="face6">
                        <img src={solidity}  alt="" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </div>
     );
}
 
export default About;