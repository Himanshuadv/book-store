import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import {BiUserCircle} from 'react-icons/bi'
import BookSingleCard from "./BookSingleCard";
import { useNavigate } from "react-router-dom";

function BooksCard({ books }) {
  // const [book_id,setBookId] = useState('')
  const navigate = useNavigate()
  const handleClick = (id)=>{
    // setBookId(id)
    console.log("I am clicked");
    navigate(`./${id}`)
    
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
    {books.map((item) => {
      return (
        <div onClick={() => handleClick(item._id)} key={item._id}>
          <BookSingleCard  book={item} />
          </div>
      )
    })}
  </div>

  );
}

export default BooksCard;
