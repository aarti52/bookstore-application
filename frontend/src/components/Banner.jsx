import bannerimg from '../../public/bookshelf.png'
function Banner() {
  return (
    <>
     
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 my-12
       md:mt-16  mb-0 flex flex-col-reverse md:flex-row gap-2 align-middle z-0
       bg-[rgb(2,6,23)] bg-opacity-50 dark:bg-slate-950 dark:text-white pt-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold my-4">
            Welcome to BookBat - Your Ultimate{" "}
            <span className="text-pink-500">Reading Companion!</span>
          </h1>
          <p className="my-8 font-bold ">
            Dive into a world where stories come alive and your literary dreams
            take flight. BookBat is the one-stop app for book lovers, offering
            an unparalleled reading experience right at your fingertips.
          </p>
         <div className="">
         <label className="input input-bordered flex items-center gap-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
         </div>
          <button className=" my-6  btn btn-secondary">Secondary</button>
        </div>
        <div className="md:w-1/2 flex justify-center align-center space-x-2">
        <img src={bannerimg} alt="" className=' md:w-92 md:h-96  w-80 h-80' />
        </div>
      </div>
      
    </>
  );
}

export default Banner;
