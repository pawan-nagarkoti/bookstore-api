const express = require("express");
const app = express();

app.use(express.json());

let books = [
    {
      id: "1",
      title: "Book 1",
    },
    {
      id: "2",
      title: "Book 2",
    },
  ];

  app.get('/', (req,res)=> {
    res.status(200).json({
        data: books,
        message: 'Api created'
    })
  })

  app.get('/:id', (req,res)=> {
    const findBook = books.find((v)=> v.id === req.params.id)
    if(findBook){
        res.status(200).json({
            data: findBook,
            message: 'Book fetched successfully'
        })
    }else{
        res.status(400).json({
            message: 'Book not found'
        })
    }
  })

  app.get('/add', (req,res)=> {
    console.log("POST /add endpoint hit");

    const newBook = {
        id: Math.floor(Math.random() * 1000).toString(),
        title: `Book ${Math.floor(Math.random() * 1000)}`,
      };
      books.push(newBook);
      res.status(200).json({
        data: newBook,
        message: 'Added new book sucessfully'
      })
  })

  app.get('/update/:id', (req,res)=> {
    const findBook = books.find((b)=> b.id === req.params.id);
    if(findBook){
        
    }
    console.log(findBook)
  })

  const PORT = 3000;
  app.listen(PORT, ()=> {
    console.log(`Server is now running on port ${PORT}`);
  })