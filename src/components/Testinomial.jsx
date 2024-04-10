
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial=()=>{
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
    return(
        <>
          <div class="heading_container">
        <h2>
          Testimonial
        </h2>
      </div>
    <Slider {...settings}>
      <div>
                    <img src="anuj images/image-1.jpeg" alt="image1" />
                    <div className="card-container-light">
                        <p className="card-sub-heading"><b>Packers and Movers</b></p>
                        <p className="card-desc">Relocations are made simple with the help of our reliable packers and movers.</p>
                        <div className="card-btn">Read More</div>
                    </div>
                
      </div>
      <div>
      <div class="carousel-item">
            <div class="row">
              <div class="col-md-11 col-lg-10 mx-auto">
                <div class="box">
                  <div class="img-box">
                    <img src="images/client.jpg" alt="" />
                  </div>
                  <div class="detail-box">
                    <div class="name">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <h1>
                        Siaalya
                      </h1>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable cIt is a long established fact
                      that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
 </>
  // <section class="client_section layout_padding-bottom">
  //   <div class="container">
     
  //     <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
  //       <div class="carousel-inner">
  //         <div class="carousel-item active">
  //           <div class="row">
  //             <div class="col-md-11 col-lg-10 mx-auto">
  //               <div class="box">
  //                 <div class="img-box">
  //                   <img src="images/client.jpg" alt="" />
  //                 </div>
  //                 <div class="detail-box">
  //                   <div class="name">
  //                     <i class="fa fa-quote-left" aria-hidden="true"></i>
  //                     <h6>
  //                       Siaalya
  //                     </h6>
  //                   </div>
  //                   <p>
  //                     It is a long established fact that a reader will be
  //                     distracted by the readable cIt is a long established fact
  //                     that a reader will be distracted by the readable c
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="carousel-item">
  //           <div class="row">
  //             <div class="col-md-11 col-lg-10 mx-auto">
  //               <div class="box">
  //                 <div class="img-box">
  //                   <img src="images/client.jpg" alt="" />
  //                 </div>
  //                 <div class="detail-box">
  //                   <div class="name">
  //                     <i class="fa fa-quote-left" aria-hidden="true"></i>
  //                     <h6>
  //                       Siaalya
  //                     </h6>
  //                   </div>
  //                   <p>
  //                     It is a long established fact that a reader will be
  //                     distracted by the readable cIt is a long established fact
  //                     that a reader will be distracted by the readable c
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="carousel-item">
  //           <div class="row">
  //             <div class="col-md-11 col-lg-10 mx-auto">
  //               <div class="box">
  //                 <div class="img-box">
  //                   <img src="images/client.jpg" alt="" />
  //                 </div>
  //                 <div class="detail-box">
  //                   <div class="name">
  //                     <i class="fa fa-quote-left" aria-hidden="true"></i>
  //                     <h6>
  //                       Siaalya
  //                     </h6>
  //                   </div>
  //                   <p>
  //                     It is a long established fact that a reader will be
  //                     distracted by the readable cIt is a long established fact
  //                     that a reader will be distracted by the readable c
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="carousel_btn-container">
  //         <a class="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
  //           <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
  //           <span class="sr-only">Previous</span>
  //         </a>
  //         <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
  //           <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
  //           <span class="sr-only">Next</span>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </section> 
  //       </>
    )
}

export default Testimonial;

// const Testinomial = ({ testimonial }) => (
//   <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//     <p className="text-gray-800">{testimonial.text}</p>
//     <div className="flex justify-between items-center mt-4">
//       <div className="text-gray-600">
//         <p className="font-bold">{testimonial.name}</p>
//         <p>{testimonial.position}</p>
//       </div>
//       <img
//         src={testimonial.image}
//         alt={testimonial.name}
//         className="w-12 h-12 rounded-full object-cover"
//       />
//     </div>
//   </div>
// )

// export default Testinomial