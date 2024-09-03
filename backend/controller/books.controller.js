import bookinfo from "../model/book.model.js";
 const getbook=async(req,res)=>{
    try {
        const book=await bookinfo.find()
        res.status(200).json(book)
    } catch (error) {
        console.log('error:',error);
        res.status(error.code).json(error)
    }
}
export default getbook;