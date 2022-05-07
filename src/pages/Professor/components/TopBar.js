import pic from "../images/logo.png";
import './TopBar.css'

const TopBar = () => {
    return (
        <div className='prof-topbar'>
            <img src={pic} className='prof-topbar_logo-pic' />
        </div>
    )
}

export default TopBar;