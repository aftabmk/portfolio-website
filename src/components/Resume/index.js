import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faEnvelope, faGlobe, faGraduationCap, faHome, faLocationDot, faPhone, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { onSnapshot, collection } from 'firebase/firestore'
import db from '../Backend/config'
import Loading from '../Loading/Loading';
import './resume.css'

const Resume = () => {
    const [projects, setprojects] = useState([])
    const [bio, setBio] = useState([])
    const [pics, setPics] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, 'resume'), (data) => { setprojects(data.docs.map(doc => doc.data())) })
        onSnapshot(collection(db, 'bio'), (data) => { setBio(data.docs.map(doc => doc.data())) })
        onSnapshot(collection(db, 'image'), (data) => { setPics(data.docs.map(doc => doc.data())) })
    }, [])

    if (!projects || !bio || !pics) return <Loading />

    return (

        <div className="resume">
            <div className="top1">
                <div className="imgBx">
                    {bio.map((biodata) => (
                        <a href={biodata.pdf} target='_blank'>
                            <img className='img1' src={biodata.img} alt="img" />
                        </a>
                    ))}
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
                            <span className="text">https://aftab.netlify.app</span>
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
                    <h3 className='h3'>Technical Skills</h3>
                    <div className="span">
                        {pics.map((pic, i) => (<img src={pic?.img} alt='img' className='icons' />))}
                    </div>
                </div>
                <div className="rightSide">
                    <div className="about">
                        <h3 className='h3'>Profile</h3>
                        <p>
                            {bio.map(biodata => biodata.biodata)}
                        </p>
                    </div>
                    <div className="project">
                        <h3 className='h3'>Projects</h3>
                        {projects.map((project) => (
                            <div className="projects">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faReact} />
                                    <span className='texts'>{project?.title}</span>
                                </span>
                                <p>{project?.description}</p>
                            </div>
                        ))}
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