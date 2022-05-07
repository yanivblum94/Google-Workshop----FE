import pic from "../images/logo.png";
import './TopBar.css'

const TopBar = () => {
    return (
        <div className='top-bar'>
            <img src={pic} className='top-bar-logo-pic' />
        </div>
    )
}

export default TopBar;