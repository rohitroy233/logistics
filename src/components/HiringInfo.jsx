import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const HiringInfo = () => {
    return (
        <section id="hiring-info" className='block'>
            <p id="hiring-heading">Process of Hiring The <span className="blue">Best Movers</span></p>
            <div className="card-layout">
                <div className="card-hiring">
                    <FontAwesomeIcon className='card-logo' icon={faEnvelope} />
                    <p className="card-heading">Step 1</p>
                    <p className="card-sub-heading">Share Your Requirement</p>
                    <p className="card-desc">Let us know what goods you need to shift and your preferred time.</p>
                </div>
                <div className="card-hiring">
                    <FontAwesomeIcon className='card-logo' icon={faClock} />
                    <p className="card-heading">Step 2</p>
                    <p className="card-sub-heading">Find The Perfect Matches</p>
                    <p className="card-desc">We'll find three top-rated movers that match your needs.</p>
                </div>
                <div className="card-hiring">
                    <FontAwesomeIcon className='card-logo' icon={faEnvelope} />
                    <p className="card-heading">Step 3</p>
                    <p className="card-sub-heading">Compare and Hire</p>
                    <p className="card-desc">Compare shifting quotes and choose the best movers within your budget.</p>
                </div>
                <div className="card-hiring">
                    <FontAwesomeIcon className='card-logo' icon={faClock} />
                    <p className="card-heading">Step 4</p>
                    <p className="card-sub-heading">Schedule Your Move</p>
                    <p className="card-desc">Confirm the booking details, including the date and time for a seamless move.</p>
                </div>
            </div>
        </section>
    )
}

export default HiringInfo;