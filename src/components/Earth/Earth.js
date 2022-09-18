import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';



const Earth = () => {

    return (
        <div className="earth" style={{ color: '#f2f2f2' }}>
            <Globe 
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundColor="rgba(0,0,0,0)"
                width='100px'
                height='460.468522px'
                />
        </div>
    );
}

export default Earth;