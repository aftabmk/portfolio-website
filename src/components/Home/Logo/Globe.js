import Globe from 'react-globe.gl';
import moon from '../../../assets/images/lunar_surface.jpg'
import moons from '../../../assets/images/lunar_bumpmap.jpg'

import { useEffect, useRef } from 'react';
import './index.scss';

    const Globes = () => {
    const globeRf = useRef();
    useEffect(()=>
    {
        globeRf.current.controls().autoRotate = true
        globeRf.current.controls().autoRotateSpeed = 1.5
        globeRf.current.pointOfView({altitude:4},5000)
    },[])
    
    return (

        <div className="earth" style={{ color: '#f2f2f2' }}>        
            <Globe
                ref={globeRf}
                globeImageUrl={moon}
                bumpImageUrl={moons}
                backgroundColor="rgba(0,0,0,0)"
            />
        </div>
    );
}

export default Globes;