// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faClock } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <section id="services" className="block">
            <h2>Our <span className="blue">Services</span></h2>
            {/* <h2 id="services-heading">Our Services</h2>
    <p id="services-subheading">India's Largest Packers and Movers MarketPlace , Over 30,000+ experts worldwide.</p> */}
            <div className="card-layout">
                <div className="card-services">
                    <img src="anuj images/image-1.jpeg" alt="image1" />
                    <div className="card-container-light">
                        <p className="card-sub-heading"><b>Packers and Movers</b></p>
                        <p className="card-desc">Relocations are made simple with the help of our reliable packers and movers.</p>
                        <div className="card-btn">Read More</div>
                    </div>
                </div>
                <div className="card-services">
                    <img src="anuj images/image-2.jpeg" alt="image2" />
                    <div className="card-container-light">
                        <p className="card-sub-heading"><b>Car Transport</b></p>
                        <p className="card-desc">Use our specialized car transportation in India to transport your car safely to your chosen location.</p>
                        <div className="card-btn">Read More</div>
                    </div>
                </div>
                <div className="card-services">
                    <img src="anuj images/image-3.jpeg" alt="image3" />
                    <div className="card-container-light">
                        <p className="card-sub-heading"><b>Warehouse Service</b></p>
                        <p className="card-desc">Storage in our roomy, well-kept warehouses is safe and secure with our warehouse services.</p>
                        <div className="card-btn">Read More</div>
                    </div>
                </div>
            </div>
            <div className="card-layout">
            <div className="card-services">
                    <img src="anuj images/image-4.jpeg" alt="image4" />
                    <div className="card-container-light">
                        <p className="card-sub-heading"><b>Hire Truck and Tempo</b></p>
                        <p className="card-desc">You can easily Hire Tempo on Rent through our platform to fulfil your transportation needs.</p>
                        <div className="card-btn">Read More</div>
                    </div>
                </div>
                <div className="card-services">
                    <img src="anuj images/image-3.jpeg" alt="image5" />
                    <div className="card-container-light">
                        <p className="card-sub-heading"><b>Cargo Service</b></p>
                        <p className="card-desc">Use our dependable Cargo services in India to move your cargo quickly.</p>
                        <div className="card-btn">Read More</div>
                    </div>
                </div>
                <div className="card-services">
                    <img src="anuj images/image-3.jpeg" alt="image6" />
                    <div className="card-container-light">
                        <p className="card-sub-heading"><b>Transport Service</b></p>
                        <p className="card-desc">Take advantage of our all-inclusive transport services for hassle-free logistics.</p>
                        <div className="card-btn">Read More</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;