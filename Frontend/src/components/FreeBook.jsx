import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import list from "../../public/list.json";
const FreeBook = () => {
  const freeBooks = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="p-4 px-4 mt-2 md:mt-18 md:px-24 my-16">
        <div className="slider-container">
          <div className="my-4">
            <h2 className="text-xl">Free Books</h2>
          </div>
          <Slider {...settings}>
            {freeBooks.map((item) => (
              <Cards
                imageurl={item.image}
                name={item.name}
                title={item.title}
                price={item.price}
                category={item.category}
                key={item.id}
              />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default FreeBook;
