import './slider.css'
import Carousel from 'react-elastic-carousel';

const TSlider = () => {

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1 },
      { width: 768, itemsToShow: 1 },
      { width: 1200, itemsToShow: 1 }
    ];

    const testimonials = [
        {
            personName:'Ada',
            personImg:'https://images.pexels.com/photos/3746226/pexels-photo-3746226.jpeg?auto=compress&cs=tinysrgb&w=1600',
            testimonial:`
            I had my dental implants done at Dental Plus and I'm so happy with the results. 
            They look and feel completely natural. 
            Dr. White is a very skilled dentist and he made the whole process very easy and stress-free.
            I would definitely recommend Dental Plus to anyone considering dental implants.`
        },
        {
            personName:'Busayo',
            personImg:'https://i.guim.co.uk/img/media/50eb5acd6501ca6a30bcc41aa873620b08fc683f/0_1542_4016_2409/master/4016.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=efba0805102e14871fca10bbe04bea36',
            testimonial:`
            I was so nervous about getting my teeth cleaned, but the folks at Dental Plus' was so reassuring and gentle. 
            They explained everything they was doing and made sure I was comfortable the whole time.
             I would definitely recommend Dental plus to anyone looking for a friendly and professional dental experience`
        },
        {
            personName:'Johnson',
            personImg:'https://www.aljazeera.com/wp-content/uploads/2019/02/9652863e6e784640bcfe4d4c7108eda4_18.jpeg?resize=770%2C513&quality=80',
            testimonial:`
            I had to have my wisdom teeth removed and I was very nervous about it, but the staff at Dental plus was so supportive and helpful. 
            They walked me through the whole process and made sure I was comfortable the whole time. I'm so glad I chose Dental plus for my wisdom teeth removal`
        }
    ]

      return(
           <div className="carousel-wrapper border-1 rounded-3xl bg-white flex flex-col items-center justify-center p-10">
             <h1 className="text-2xl font-bold mb-10">testimonials </h1>
          <Carousel breakPoints={breakPoints} className="rec-carousel-item">
            {testimonials.map((item) => (
              <div id="carouselCenter">
                  <div id="imgContain">
                  <img src={item.personImg} />
                  </div>
                  <h1>{item.personName}</h1>
                  <p>{item.testimonial}</p>
              </div>
            ))}
          </Carousel>
        </div>
      )
  }
  
  export default TSlider