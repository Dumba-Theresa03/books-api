const books = require("../books")


//get all books
const getBooks = (req, res)=>{
res.status(200).json(books)

}

//delete a book
const deleteBook =async(req, res)=>{
   /* const foundBook = await books.findByTitle(req.params.title)
    if (foundBook){
        foundBook.remove()
        res.json({img:"book removed"})
    }else{
        res.status(404).json({error:"Book not found"})
    }*/
//delete a results
const deleteBook =(req, res)=>{
    res.json(books.filter((book)=>book.title!=req.params.name))
}
    

}







module.exports={getBooks, deleteBook}