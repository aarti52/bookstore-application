import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import{useState, useEffect} from 'react'
import axios from "axios";
import Login from "./Login"
import {toast} from 'react-hot-toast'

function Signup() {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  //target the browser root element
  const element = document.documentElement; //method to access root element of browser
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme", "light");
      document.body.classList.remove("dark");
    }

    return () => {};
  }, [theme]);

    
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = async(data) => {
      // console.log(data);
      const userinfo={
        fullname: data.fullname,
        password: data.password,
        email: data.email,
      }
      await axios
      .post("http://localhost:4000/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          // navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          // console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
    }
    
  return (
    <>
    <div className="flex items-center justify-center h-screen">
    <div id="my_modal_4" className="">
        <div className="modal-box flex flex-col items-start overflow-y-scroll scrollbar-hide text-white max-w-68 w-[18rem] h-[29rem] text-md h-46 md:w-[22rem] md:h-92 justify-start  dark:bg-[rgb(2_6_23/var(--tw-bg-opacity))] dark:bg-opacity-100 bg-[rgb(2,6,23)] bg-opacity-50 ">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
         
          <div className="flex flex-col justify-center items-start mx-2 my-4 gap-2">
            <h1 className="text-xl font-bold">Signup</h1>
            <div className="flex flex-col gap-7 justify-start items-start mt-8">
            <div className="flex flex-col gap-2 items-start">
                <label htmlFor="fullname" className="text-l font-md">Name</label>
                <input type="text" className="w-[13rem] md:w-[18rem] font-thin text-sm h-8 rounded-1  text-[#e3f4f4] bg-black  focus:outline-none "  
                 {...register("fullname", { required: true })} />
               {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}

              </div>
             
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="email" className="text-l font-md">Email</label>
                <input type="email"
                 className="w-[13rem] md:w-[18rem] font-thin text-sm h-8 rounded-1  text-[#e3f4f4] bg-black  focus:outline-none " 
                 {...register("email", { required: true })}  />
               {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className=" flex flex-col gap-2 items-start">
                <label htmlFor="password" className="text-l font-md">Password</label>
                <input type="password" 
                className="w-[13rem] md:w-[18rem] font-thin text-sm h-8 rounded-1  text-[#e3f4f4] bg-black focus:outline-none"
                {...register("password", { required: true })}
                 />
                  {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-[19rem] md:items-center items-start gap-[1rem] md:gap-[4rem]  ">
            <button className="btn btn-secondary w-16 ">Signup</button>{" "}
            <p className="font-thin text-sm"> have an account? 
                <button  onClick={()=>
                
                document.getElementById('my_modal_3').showModal()}
                className="text-blue-500 underline"
               > Login</button>
            </p>
                <Login/>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Signup
