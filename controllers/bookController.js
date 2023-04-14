const Book = require("../models/Book");

const getAllBooks = async (req,res)=>{
    try {
        const foundBook = await Book.find({})
        res.status(200).json({ foundBook })
        //res.render("pages/home");
    }
     catch (error) {
        res.send(error)
    }
}

const AddBookform = async (req,res)=>{

    try {
        const newBook = await Book.create(req.body)
        res.status(201).json({ message:`${newBook.name} is added to the database` })
    }
     catch (error) {
        res.send(error)
    }

}
const getBook = async (req,res)=>{
    try {
        const book = await Book.findOne({ _id:req.params.id });
        if(!book){ return res.json({ msg:`No book of id ${req.params.id} found`}) }
        res.status(200).json({ book })
    } catch (error) {
        res.send(error) 
    }
    
}

const editBook = async (req,res)=>{
    try {
        const book = await Book.findOneAndUpdate({ _id:req.params.id },
            { $set:req.body},
             {new:true,runValidators:true});

        res.status(200).json({ book });

    } catch (error) {
        res.send(error);
    } 

}

const deleteBook = async (req,res)=>{
    try {
        const book = await Book.findByIdAndDelete({ _id:req.params.id })
        if(!book){return res.json({ msg:`No book of id ${req.params.id} found`}) };

        res.status(200).json({ msg:"Book deleted" })

    } catch (error) {
        res.send(error) 
    }
}

const deleteBooks = async (req,res)=>{
    try {
        const book = await Book.deleteMany({  })
        if(!book){return res.json({ msg:`No book of found found`}) };
        
        res.status(200).json({ msg:"Books deleted" })

    } catch (error) {
        res.send(error) 
    }
}

try {
    module.exports = {
        getAllBooks,AddBookform, getBook,editBook,deleteBook,deleteBooks,
    }    
} catch (error) {
  console.log(error);  
}

