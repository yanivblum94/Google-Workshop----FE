import pic from "../images/3.png";
import './TopBar.css'
const TopBar = () => {
    return (
        <div className='upper-bar'>
            <img src={pic} className='logo-pic' />
        </div>
    )
}

export default TopBar;