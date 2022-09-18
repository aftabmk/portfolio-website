import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'


const Contact = () => {
    useEffect(() => { setTimeout(() => { return setLetterClass('text-animate-hover') }, 3000) }, [])
    const sendEmail = (e) => { e.preventDefault(); emailjs.sendForm('service_brrz7ms', "template_x8gfwjm", ref.current, "o8QHhmjdHiUIya-To").then((result) => { console.log(result.text); alert('Message sent successfully'); window.location.reload(true) }, () => { alert('Failed to send the message') }); }
    const [letterClass, setLetterClass] = useState('text-animate')
    const ref = useRef()
    const position = [10.978021, 76.227408];


    return (
        <div>
            <div className="container contact-page top">
                    <div className="text-zone up">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={'Contact Me'.split("")}
                                idx={15}
                            />
                        </h1>
                        <p>
                            If you find my portfolio website amusing,
                            You can kindly contact me.
                        </p>
                        <div className="contact-form">
                            <form ref={ref} onSubmit={sendEmail}>
                                <ul>
                                    <li className="half">
                                        <input type="text" name='name' placeholder='Name' required />
                                    </li>
                                    <li className="half">
                                        <input type="email" name='email' placeholder='Email' required />
                                    </li>
                                    <li>
                                        <input type='text' placeholder='Subject' name='subject' required />
                                    </li>
                                    <li>
                                        <textarea placeholder='Message' name='message' required />
                                    </li>
                                    <li>
                                        <input type="submit" className='flat-button' value='SEND' />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                <div className="info-map">
                    Aftab MK
                    <br />
                    Housing Colony Road<br />
                    Perinthalmanna,679322<br />
                    India<br />
                    <span>aftabmohammedk1234@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
                        <TileLayer
                            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                        // url="https://tiles.stadiamaps/tiles/alidade_smooth-dark/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Feel free to contact me
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </div>
    );
}

export default Contact;