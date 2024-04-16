import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();
router.use(express.json())
//Route to save books

router.post('/', async(req,res)=>{
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
          ) {
            return response.status(400).send({
              message: 'Send all required fields: title, author, publishYear',
            });
          }
          const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
          };
      
          const book = await Book.create(newBook);
      
          return res.status(201).send(book);
    } catch (error) {
        console.log("Code phat gaya " + error.message);
        res.status(500).send({ message: error.message });
    }


})

//now lets get all the books
router.get('/',async(req,res)=>{
    try {
        const books = await Book.find({});
        
        return res.status(200).json({
          count: books.length,
          data: books,

        });
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
})

//find one book by id
router.get("/:id",async(req,res)=>{
   try {
        const {id} = req.params
        const book = await Book.findById(id)
        res.status(200).send(book)
   } catch (error) {
        console.log(error);
        res.status(404).send(error)
   }
})
//edit book by id
router.put('/:id',async(req,res)=>{
    try {
        if(!req.body.title && !req.body.author &&!req.body.publishYear){
            return res.status(500).send({
             message: 'Send required fields: title, author, publishYear',
           })
         }else{
             const {id} = req.params
             const result = await Book.findByIdAndUpdate(id,req.body) //use async await
             if(!result){
                 return res.status(404).json({ message: 'Book not found' });
             }
             return res.status(200).send({ message: 'Book updated successfully' });
         }
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})
    router.delete('/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const result = await Book.findByIdAndDelete(id);
    
            if (!result) {
                return res.status(404).json({ message: 'Book not found' });
            }
            return res.status(200).send({ message: 'Book deleted successfully' });
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message });
        }
    });
    

//lets delete the book use async await 

   
export default router