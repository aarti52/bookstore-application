// import list from "../../public/list.json";
//cors does not allow to access data from one port to another port
import Card from "./Card3";
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import axios from 'axios'

function Course() {
  const [books, setbooks] = useState([])
  useEffect(() => {
    const getbooks = async() =>{
      try {
        const res=await axios.get('http://localhost:4000/book')
        console.log(res.data)
        setbooks(res.data)
      } catch (error) {
        console.log("Error", error)
      }
    }
    getbooks()
  }, [])
  
  let mylist = books.filter((item) => item.id > 0);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  bg-[rgb(2,6,23)]  dark:bg-slate-950 dark:text-white ">
        <div className="flex flex-col items-center justify-center mt-16 pt-20">
          <h1 className="text-center font-bold  text-3xl">
            We are grateful to have you{" "}
            <span className="text-secondary">here!</span> :)
          </h1>
          <p className="my-8 md:text-xl">
            Welcome to our courses section! Find all your essential textbooks
            and study materials here, tailored for your academic success. Thank
            you for choosing us to support your educational journey. Happy
            studying!
          </p>
          <Link to='/'>
          <button  className="btn btn-secondary w-24 hover:scale-105 transition-all">Go Back</button>
          
          </Link>
        </div>

        <div className="flex flex-col my-4 md:flex-row gap-4 flex-wrap justify-center items-center ">
          {mylist.map((item) => (
            <Card item={item} key={item.id} itemsize={46}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
