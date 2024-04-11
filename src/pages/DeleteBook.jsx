import React,{useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from '../components/Spinner'
import axios from 'axios';
import BackButton from '../components/BackButton';



function DeleteBook() {
  const [loading,setLoading] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()
  const handleSubmit = ()=>{
      setLoading(true)
      axios
          .delete(`http://localhost:8000/books/${id}`)
          .then(()=>{
            setLoading(false)
            navigate('/')
          }).catch((error)=>{
            console.log(error);
            setLoading(false)
          })
  }
  return (
    <div>
      <BackButton/>
      {loading ?<Spinner/> : " "}
      <div className='flex flex-col items-center border-2 border-sky-300 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You sure want to delete the book ? </h3>
          <button className=' p-4 bg-red-600 text-white m-8 w-full ' onClick={handleSubmit}>
            Yes, Delete it
          </button>
      </div>
    </div>
  )
}

export default DeleteBook