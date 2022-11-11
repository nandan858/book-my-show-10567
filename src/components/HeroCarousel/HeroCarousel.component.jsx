import React , {useState} from 'react'
import HeroSlider from  "react-slick"
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {

  const [images, setImages] = useState([
    {
      "adult": false,
      "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      "genre_ids": [
        28,
        14,
        878
      ],
      "id": 436270,
      "original_language": "en",
      "original_title": "Black Adam",
      "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      "popularity": 3104.938,
      "poster_path": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
      "release_date": "2022-10-19",
      "title": "Black Adam",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 991
    },
      {
        "adult": false,
        "backdrop_path": "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 663712,
        "original_language": "en",
        "original_title": "Terrifier 2",
        "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
        "popularity": 3715.544,
        "poster_path": "/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg",
        "release_date": "2022-10-06",
        "title": "Terrifier 2",
        "video": false,
        "vote_average": 7,
        "vote_count": 539
      },
      {
        "adult": false,
        "backdrop_path": "/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
        "genre_ids": [
          10752,
          18,
          28
        ],
        "id": 49046,
        "original_language": "de",
        "original_title": "Im Westen nichts Neues",
        "overview": "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
        "popularity": 2467.37,
        "poster_path": "/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
        "release_date": "2022-10-07",
        "title": "All Quiet on the Western Front",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 637
      },
    
  ]);

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite : true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  }

  const settings = {
    arrows: true,
    slidesToShow: 2,
    infinite : true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  }
  return (
    <>
    
    <div className='lg:hidden'>
      <HeroSlider {...settings}>
        {
          images.map((images, index) => (
            <div className='w-full h-56 md:h-80 py-3' key={index}>
              <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} 
              alt="Hero Banner" className='w-full h-full rounded-md object-center'/>
            </div>
          ))
        }
      </HeroSlider>
    </div>
    <div className="hidden lg:block">
    <HeroSlider {...settingsLG}>
        {
          images.map((images, index) => (
            <div className='w-full h-96 px-2 py-3' key={index}>
              <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} 
              alt="Hero Banner" className='w-full h-full rounded-md object-center'/>
            </div>
          ))
        }
      </HeroSlider>
    </div>
    </>
    )
}

export default HeroCarousel