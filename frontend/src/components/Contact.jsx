import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
  
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
    <div className="flex items-end justify-center h-screen">
    <div id="my_modal_5" className="">
        <div className="modal-box bg-white flex flex-col items-start overflow-y-scroll scrollbar-hide text-black max-w-68 w-[18rem] h-[29rem] text-md h-46 md:w-[22rem] md:h-92 justify-start">
          <form method="" onSubmit={handleSubmit(onSubmit)}>
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
         
          <div className="flex flex-col justify-center items-start mx-2  gap-2">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <div className="flex flex-col gap-[1rem] justify-start items-start mt-4">
            <div className="flex flex-col gap-2 items-start">
                <label htmlFor="name" className="text-l font-md">Name</label>
                <input type="text" className="w-[13rem] md:w-[18rem] font-thin text-sm h-8 rounded-1 bg-[#e3f4f4] text-black  focus:outline-none "  
                 {...register("email", { required: true })} />
               {errors.email && <span className="text-sm text-red-500">This field is required</span>}

              </div>
             
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="email" className="text-l font-md">Email</label>
                <input type="email"
                 className="w-[13rem] md:w-[18rem] font-thin text-sm h-8 rounded-1 bg-[#e3f4f4] text-black  focus:outline-none " 
                 {...register("email", { required: true })}  />
               {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className=" flex flex-col gap-2 items-start">
                {/* <label htmlFor="password" className="text-l font-md">Password</label>
                <input type="password" 
                className="w-[13rem] md:w-[18rem] font-thin text-sm h-8 rounded-1 bg-[#e3f4f4] text-black focus:outline-none"
                {...register("password", { required: true })}
                 /> */}
                 <label htmlFor="msg" className="text-l font-md">Message</label>
                 <textarea type="textarea"  className="w-[13rem] md:w-[18rem] font-thin text-sm h-[6rem]
                  rounded-1 bg-[#e3f4f4] text-black focus:outline-none"
                {...register("password", { required: true })}
                />
                {errors.msg && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <button className="btn btn-primary">Submit</button>
                <form action=""></form>

            </div>
            
          </div>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact
