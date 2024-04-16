import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    book_reference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book' // This should match the name of your Book model
    },
    chapters: [{
      type: String // Assuming chapters are represented as strings
    }],
    notes: [[{
      type: String // Assuming notes are represented as strings
    }]]
  });
  
  // Create models
  const Content = mongoose.model('Content', contentSchema);
  export default Content;
  