import Loader from "react-loaders";

const Loading = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Loader type='pacman' />
        </div>
    );
}

export default Loading;