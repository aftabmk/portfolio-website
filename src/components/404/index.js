import './index.scss'
import img from './../../assets/images/404.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Notfound = () => {
    return ( 
        <div className="img">
            <img src={img} alt="404" />
            <a href="/">
                <FontAwesomeIcon icon={faHome} />
            </a>
        </div>
     );
}
 
export default Notfound;