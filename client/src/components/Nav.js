import logo from '../images/tinder_logo_white.png'
import colorLogo from '../images/tinder_icon.png'

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    }

    return (
        <nav>
            <div className="logo-container">
                <img alt="" className="logo" src= { minimal ? colorLogo : logo } />
            </div>

            {!authToken && !minimal && (<button className="nav-button"
             onClick={handleClick}
             disabled={showModal}>Log in</button>)}
        </nav>
    )
}

export default Nav