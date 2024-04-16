import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BiUserCircle } from 'react-icons/bi';
import { BiShow } from 'react-icons/bi';
import BookModel from './BookModel';

function BookSingleCard({ book }) {
    const [showModel, setShowModel] = useState(false);
  
    return (
        <>
        <div className='border-2 border-gray-300 rounded-3xl hover:shadow-lg cursor-pointer'>
            <div className='flex relative justify-end'>
                    <img className='w-14 h-14 rounded-full absolute left-[5%] top-[30%] border-2 border-gray-300' src="https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                
                <div className='h-9 w-9 mx-1 my-2 rounded-full border-2 border-green-800 flex justify-center items-center'>
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl mx-2 my-3 text-green-800 hover:text-black" />
                </Link>
                </div>

                <div className='h-9 w-9 mx-1 my-2 rounded-full border-2 border-yellow-600 flex justify-center items-center'>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl mx-2 my-3 text-yellow-600 hover:text-black" />
                </Link>
                </div>

                <div className='h-9 w-9 mx-1 my-2 mr-2 rounded-full border-2 border-red-600 flex justify-center items-center'>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl mx-2 my-3 text-red-600 hover:text-black" />
                </Link>
                </div>
                
                
                
                
            </div>
            <hr />
            <div className='my-6 mx-4'>
                <p className='font-bold text-xl mb-1'>{book.title}</p>
                <p className='mb-1 font-semibold'>Author : {book.author}</p>
                <p className='mb-1 font-semibold'>Published : {book.publishYear}</p>
            </div>
            </div>
        </>
        // <div
        //     key={book._id}
        //     className="border-2 border-gray-500 rounded-lg px-4 py-2 relative hover:shadow-xl"
        // >
        //     <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        //         {book.publishYear}
        //     </h2>
        //     <h4 className="my-2 text-gray-500">{book._id}</h4>
        //     <div className="flex justify-start items-center gap-x-2">
        //         <PiBookOpenTextLight className="text-red-300 text-3xl" />
        //         <h2 className="my-1">{book.title}</h2>
        //     </div>
        //     <div className='flex justify-start items-center gap-x-2'>
        //         <BiUserCircle className='text-red-300 text-2xl' />
        //         <h2 className='my-1'>{book.author}</h2>
        //     </div>
        //     <div className="flex justify-start items-center gap-x-2 mt-4 p-4">
        //         <BiShow
        //             className='text-3xl text-blue-800 hover:text-gray-600 cursor-pointer'
        //             onClick={() => setShowModel(true)}
        //         />
        //         <Link to={`/books/details/${book._id}`}>
        //             <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        //         </Link>
        //         <Link to={`/books/edit/${book._id}`}>
        //             <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        //         </Link>
        //         <Link to={`/books/delete/${book._id}`}>
        //             <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        //         </Link>
        //     </div>
        //     {showModel && <BookModel book={book} onClose={() => setShowModel(false)} />}
        // </div>
    );
}

export default BookSingleCard;
