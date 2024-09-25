import { useState } from "react";
import "./App.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const images = [
  "https://i.ebayimg.com/00/s/Nzg0WDE2MDA=/z/owsAAOSwbWhdTnvI/$_57.JPG?set_id=8800005007",
  "https://movies-b26f.kxcdn.com/wp-content/uploads/2014/11/interstellar-poster-3.jpg",
  "https://image.tmdb.org/t/p/original/ulf1aY9LXciRX2IpnJksCDJOWvp.jpg",
  "https://i0.wp.com/ortadunya.com/wp-content/uploads/2023/02/yeni-yuzuklerin-efendisi-film-scaled.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/8b7f3d581ca2ff9d2936c0885474a0d77fea5a39ca44d0a3bdb7f809f0863d38.jpg",
];
function App() {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <div>
        <h2>Project Carousel</h2>
        <div className="slider">
          <FaArrowLeftLong className="leftArrow" onClick={prevImage} />
          {images.map(
            (image, index) =>
              current === index && (
                <div key={index} className="slide">
                  <img src={image} alt="" />;
                </div>
              )
          )}
          <FaArrowRightLong className="rightArrow" onClick={nextImage} />
        </div>
      </div>
    </>
  );
}

export default App;
