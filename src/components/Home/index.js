import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    useEffect(() => { setTimeout(() => { return setLetterClass('text-animate-hover') }, 4000) }, [])
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <div>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'</span>
                        <span className={`${letterClass} _16`}>m</span>
                        <span className="name">A</span>
                        <AnimatedLetters letterClass={letterClass} strArray={'ftab'.split('')} idx={18} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={'Full Stack Developer'.split('')} idx={25} />
                    </h1>
                    <h2>React Js | Express Js | MongoDB | Solidity</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </div>
    );
}

export default Home;