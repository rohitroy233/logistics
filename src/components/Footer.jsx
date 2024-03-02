import { faWhatsapp, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer=()=>{
    return(
<footer id="footer" className="block">
   <div id='socials' className="footer-card">
   <p className="footer-heading">Help Us Spread The Word</p>
    <div className="card-container-dark">
        
        <p className="footer-desc"><ul>
            <li><FontAwesomeIcon className='footer-logo whatsapp' icon={faWhatsapp} /></li>
            <li><FontAwesomeIcon className='footer-logo twitter' icon={faTwitter} /></li>
            <li><FontAwesomeIcon className='footer-logo linkedin' icon={faLinkedin} /></li>
            <li><FontAwesomeIcon className='footer-logo facebook' icon={faFacebook} /></li>
            </ul></p>
    </div>
   </div>
   <div id="address" className="footer-card">
   <p className="footer-heading">Address and Contact Info</p>
    <div className="card-container-dark">
        
        <p className="footer-desc"> <span className="bold">PHONE</span>  : 123456789</p>
        <p className="footer-desc"> <span className="bold">ADDRESS</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam minus, iste a qui cum.</p>
    </div>
   </div>
</footer>
    )
}

export default Footer;