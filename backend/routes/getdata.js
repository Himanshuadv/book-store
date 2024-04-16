import express from 'express';
import Content from '../models/contentModel.js'
const router = express.Router();
router.use(express.json());

router.post('/data', async(req,res)=>{
    const chapters = req.body.chapter;
    const notes = req.body.notes;
    try{
        await Content.create({
            chapters,
            notes
        })
        res.send('Content saved Successfully');
    }
    catch(err){
        console.log(err);
    }
});

export default router