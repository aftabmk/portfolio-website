import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEnvelope, faGlobe, faGraduationCap, faHome, faLanguage, faLocationDot, faPhone, faUniversity } from '@fortawesome/free-solid-svg-icons'
import img from './../../assets/images/img.jpg'
import mongodb from './../../assets/images/mongod.png'
import tailwind from './../../assets/images/tailwind.png'
import solidity from './../../assets/images/solidity.png'
import firebase from './../../assets/images/firebase.png'
import sanity from './../../assets/images/sanity.png'
import mui from './../../assets/images/mui.png'
import express from './../../assets/images/express.png'
import redux from './../../assets/images/redux.png'
import stripe from './../../assets/images/stripe.png'
import './resume.css'
import { faCss3, faHtml5, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
const Resume = () => {
    return (

        <div className="resume">
            <div className="top1">
                <div className="imgBx">
                    <img className='img1' src={img} alt="img" />
                </div>
                <div className="profileText">
                    <h3 className='h3'>Aftab Mohamed<br />Kizhissery</h3>
                </div>
            </div>
            <div className="contentBox">
                <div className="leftSide">
                    <h3 className='h3'>Contact Info</h3>
                    <ul className='ul'>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <span className="text">+91 89 21 25 84 97</span>
                        </li>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span className="text">aftabmohammedk1234@gmail.com</span>
                        </li>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faGlobe} />
                            </span>
                            <span className="text">https://aftabmk.netlify.app</span>
                        </li>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <span className="text">Perinthalmanna,Kerala</span>
                        </li>
                    </ul>
                    <h3 className="h3">Education</h3>
                    <ul className='ul'>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faCalendar} />
                            </span>
                            <span className="text">2015-2019</span>
                        </li>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </span>
                            <span className="text">Govt Engineering College Idukki</span>
                        </li>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faUniversity} />
                            </span>
                            <span className="text">Kerala Technical University</span>
                        </li>
                    </ul>
                    <h3 className='h3'>Language</h3>
                    <ul className='ul'>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faLanguage} />
                            </span>
                            <span className="text">English</span>
                        </li>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faLanguage} />
                            </span>
                            <span className="text">Hindi</span>
                        </li>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faLanguage} />
                            </span>
                            <span className="text">Malayalam</span>
                        </li>
                    </ul>
                    <h3 className='h3'>Technical Skills</h3>
                    <div className="span">
                        <span className="fa-icon">
                            <FontAwesomeIcon icon={faHtml5} color='#e34c26' />
                        </span>
                        <span className="fa-icon">
                            <FontAwesomeIcon icon={faCss3} color='#264de4' />
                        </span>
                        <span className="fa-icon">
                            <FontAwesomeIcon icon={faSquareJs} color='#EFD81D' />
                        </span>
                    </div>
                    <div className="span">
                        <span className="fa-icon">
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </span>
                        <img src={express} alt="express" className='icons' />
                        <img src={mongodb} alt="mongodb" className='icons' />
                    </div>
                    <div className="span">
                        <img src={redux} alt="redux" className='icons' />
                        <img src={tailwind} alt="tailwind" className='icons' />
                        <img src={mui} alt="mui" className='icons' />
                    </div>
                    <div className="span">
                        <img src={solidity} alt="solidity" className='icons' />
                        <img src={firebase} alt="firebase" className='icons' />
                        <img src={sanity} alt="sanity" className='icons' />
                    </div>
                    <div className="spanlast">
                        <img src={stripe} alt="stripe" className='icons' />
                    </div>
                </div>
                <div className="rightSide">
                    <div className="about">
                        <h3 className='h3'>Profile</h3>
                        <p>
                            I am a mechanical engineer who like to pursue career in MERN stack . I self taught coding with the help of some of the youtube channels like Fireship, Laith Academy, Online tutorial ,The net Ninja, freecodecamp and js mastery.
                        </p>
                    </div>
                    <div className="project">
                        <h3 className='h3'>Projects</h3>
                        <div className="projects">
                            <span className="icon">
                                <FontAwesomeIcon icon={faReact} />
                                <span className='texts'>Wordle clone</span>
                            </span>
                            <p>
                                The app is made with react js using modern hooks like useState, useEffect and useContext.
                            </p>
                        </div>
                        <div className="projects">
                            <span className="icon">
                                <FontAwesomeIcon icon={faReact} />
                                <span className='texts'>Postman clone</span>
                            </span>
                            <p>
                                The app is made with react js, axios and material ui .
                            </p>
                        </div>
                        <div className="projects">
                            <span className="icon">
                                <FontAwesomeIcon icon={faReact} />
                                <span className='texts'>YouTube clone</span>
                            </span>
                            <p>
                                The app is made with react js ,axios, react-player, react-router-dom and rapidApi
                            </p>
                        </div>
                        <div className="projects">
                            <span className="icon">
                                <FontAwesomeIcon icon={faReact} />
                                <span className='texts'>Ecommerce clone</span>
                            </span>
                            <p>
                                The app is made with next js and the backend is hosted on sanity io a headless CMS and payment integration with stripe and styling and other utilities provided by canvas-confetti, react-hot-toast, react-icons
                            </p>
                        </div>
                        <div className="projects">
                            <span className="icon">
                                <FontAwesomeIcon icon={faReact} />
                                <span className='texts'>Cryptocurrency website</span>
                            </span>
                            <p>
                                App provide realtime cryptocurrency data such as latest price, news and One year chart. It is build with react js, ant design and the data management with redux toolkit which fetches live data from rapid api with credential stored in environment variables for protection against api key misuses.
                            </p>
                        </div>
                        <div className="projects">
                            <span className="icon">
                                <FontAwesomeIcon icon={faReact} />
                                <span className='texts'>Expense Tracker</span>
                            </span>
                            <p>
                                This is a modern mern stack project with two components client and server.The client component is build with react js and the backent data is Create Read and Delete functions are done with redux toolkit.
                            </p>
                            <p>
                                The server side is built with express to create routes for GET, POST and DELETE.The data is stored on mongodb atlas with the help of mongoose js library with well defined schema.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-icon'>
                <a href="/" className='a'>
                    <FontAwesomeIcon icon={faHome} />
                </a>
            </div>
        </div>
    );
}

export default Resume;