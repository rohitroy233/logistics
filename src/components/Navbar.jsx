import { faWhatsapp, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar=()=>{
    return(
        <>
         <nav className='hh'>
            <div>he</div>
            <ul className="nav-menu">
            <p className="footer-desc"><ul>
            <li><FontAwesomeIcon className='footer-logo whatsapp' icon={faWhatsapp} /></li>
            <li><FontAwesomeIcon className='footer-logo twitter' icon={faTwitter} /></li>
            <li><FontAwesomeIcon className='footer-logo linkedin' icon={faLinkedin} /></li>
            <li><FontAwesomeIcon className='footer-logo facebook' icon={faFacebook} /></li>
            </ul></p>
           
            {/* <li className="menu-items"><a href="#contact">Contact</a></li> */}
            </ul>
        </nav>
        <nav id='navbar'>
            <div className="nav-logo"> Anuj Logistics</div>
            <ul className="nav-menu">
            <li className="menu-items"><a href="home">Home</a></li>
            <li className="menu-items"><a href="#about">About</a></li>
            <li className="menu-items"><a href="#services">Services</a></li>
            {/* <li className="menu-items"><a href="#contact">Contact</a></li> */}
            </ul>
        </nav>
        
        </>
    )
}

export default Navbar;