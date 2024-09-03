// import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import { useState,useEffect } from 'react';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Card3';
import axios from 'axios';
function Freebook() {
    const [books, setbooks] = useState([])
    useEffect(() => {
      const getbooks=async()=>{let res= await axios.get('http://localhost:4000/book')
      setbooks(res.data)}
        getbooks()
    }, [])
    let list=books.filter(book => book.price==0)
    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className='max-w-screen-2xl container flex flex-col  mx-auto md:px-20 px-4 bg-[rgb(2,6,23)] bg-opacity-50 '>
      <div>
      <h1 className='font-bold text-3xl'>Free courses</h1>
      <h2 className='my-2'>Discover a World of <span className='text-pink-500'>Free Knowledge</span></h2>
      <p className='my-2'>
      
      Welcome to our online bookstore! Enjoy a selection of free books on subjects like programming, web design, algebra, biology, and economics. Perfect for students, professionals, and lifelong learners—start reading and <span className='text-pink-500'>expand your knowledge today!</span>
      </p>
      </div>
     <div className="slider-container my-6 
     ">
       <Slider {...settings} >
       
        {list.map((item)=>
        
        <Cards item={item} key={item.id}/>
        )}
        
       </Slider>
      </div>

    </div>
    </>
  )
}

export default Freebook
