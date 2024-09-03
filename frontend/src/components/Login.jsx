import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {toast } from 'react-hot-toast'
import axios from "axios"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
   

      const userinfo={
        email: data.email,
        password: data.password
      }
      await axios.post('http://localhost:4000/user/login',userinfo).then((res) => {
        console.log(res.data)
        if(res.data) 
        {
          toast.success('login successful')
          document.getElementById('my_modal_3').close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem('Users', JSON.stringify(res.data.user))
          }, 1000);
        }
      }).catch((err) =>{

        if(err.response){
          console.log(err)
          toast.error('error:'+ err.response.data.message)
          setTimeout(() => {}, 2000);
        }
      })
      // console.log(data)
   }
  
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-col items-start max-w-68 w-[20rem] h-[26rem] text-md h-46 md:w-85 md:h-92 justify-start  overflow-hidden">
          <form method="dialog" >
          <button 
            //  onClick={()=>document.getElementById('my_modal_3').removeModal()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            </form>

            <form  onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col justify-center items-start mx-2 my-4 gap-2">
              <h1 className="text-xl font-bold">Login</h1>
              <div className="flex flex-col gap-7 justify-start items-start mt-[1rem]">
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="email" className="text-l font-thin">
                    Email
                  </label>
                  <input 
                    type="email"
                    className="w-[13rem] md:w-[16rem] font-thin text-sm h-8 rounded-1  text-[#e3f4f4] bg-black focus:outline-none"
                    {...register("email", { required: true })}
                  />
                   {errors.email && <span>This field is required</span>}
                </div>
                <div className=" flex flex-col gap-2 items-start">
                  <label htmlFor="password" className="text-l font-thin">
                    Password
                  </label>
                  <input 
                    type="password"
                    className="w-[13rem] md:w-[16rem] font-thin text-sm h-8 rounded-1  text-[#e3f4f4] bg-black focus:outline-none"
                    {...register("password", { required: true })}
                  />
                                 {errors.password && <span className="text-sm text-red-500">This field is required</span>}

                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between w-[16rem] md:items-center items-start gap-[1rem]  mt-10">
                <button className="btn btn-secondary w-16 ">Login</button>
                <div className="font-thin text-sm">
                  Not Registered?{" "}
                  <Link to="/signup"  className="underline text-blue-500 " >
                    {" "}
                    Signup
                  </Link>
                  {/* <Signup/> */}
                </div>
              </div>
            </div>
            </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
