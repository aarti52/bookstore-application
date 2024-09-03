import mongoose from 'mongoose';
const bookschema=mongoose.Schema({
    "id": String,
      "author": String,
      "title": String,
      "price": Number,
      "category": String,
      "img": String,
      "description":String
      
})
const bookinfo=mongoose.model('bookinfo',bookschema)   //the scehma will get stored in bookinfo collection
export default bookinfo