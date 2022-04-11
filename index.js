const express =require("express")
const logger =require("./middlewares/books.logger")
const booksRoute = require("./routes/booksRoute")


const app = express()

//middleware
app.use(express.json())
app.use(logger)
 
app.use(booksRoute)


//home route
app.get("/", (req, res)=>{
    res.json("Welcome to our library")
})


const PORT = process.env.PORT||8000;

app.listen(8000, ()=>{
    console.log("server is working")
})



