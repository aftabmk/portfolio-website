import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Globes from '../Home/Logo/Globe';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {

    const [ desktop , setDesktop ] = useState(window.innerWidth>768)
    const media = () =>
    {
        setDesktop(window.innerWidth>768)
    }
    useEffect(()=>{
        window.addEventListener('resize',media)
        return () => window.removeEventListener('resize',media)
    })

    return (
        <div className='App'>
            <div className='div1'>
                <Sidebar />
            </div>
            <div className="div2">
                <div className="page">
                    <span className="tags top">
                        &lt;html&gt;
                    </span>
                    <span className="tags top-tags">
                        &lt;body&gt;
                    </span>
                    <Outlet />
                    { desktop && <div className="globe"><Globes /></div>}
                    <span className="tags bottom-tags">
                        &lt;/body&gt;
                        <br />
                        <span className="bottom-tag-html">
                            &lt;/html&gt;
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Layout;