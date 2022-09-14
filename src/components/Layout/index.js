import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
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
                    <Outlet/>
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