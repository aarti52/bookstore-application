/* eslint-disable react/prop-types */


function Card3({item}) {
  return (
    <div  className="flex justify-center  px-1 py-3  ">
      <div className={`card border-transparent bg-base-100  w-56 h-96 shadow-xl  hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border `}>
  <figure>
    <img
      src="../../public/bookimg.jpg"
      alt="" />
  </figure>
  <div className="card-body px-4 py-3">
    <h4 className="card-title  h-16 overflow-ellipsis text-sm align-text-bottom">
     {item.title}
      <div className="badge badge-secondary text-xs">NEW</div>
    </h4>
    <p className="text-xs">{item.description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline bg-secondary">{`$${item.price}`}</div>
      <div className="badge badge-outline hover:bg-secondary cursor-pointer">Buy now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card3
