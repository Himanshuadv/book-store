import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link, Navigate } from 'react-router-dom'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

import BooksCard from '../components/home/BooksCard'

import Model from '../components/Model'

import CreateBook from './CreateBook'



function home() {
  const [books, setbooks] = useState([]);
  const [showModel, setShowModel] = useState(false);
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');//remove as soon as model remvoed using property cleanup fn
    }
  })

  useEffect(()=>{
    axios.get('http://localhost:8000/books')
    .then((res)=>{
      console.log(res.data.data)
      setbooks(res.data.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  const hanldeClick = () => {
    setShowModel(true);
  }
  const handleClose = () => {
    setShowModel(false);
  }

  const model = <Model onClose={handleClose}>

    <CreateBook setShowModel={setShowModel} />

  </Model>


  return (
    <div className='p-4'>

      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>

        <div className='flex justify-evenly items-center px-5 py-2 rounded-3xl bg-sky-400 hover:bg-sky-600 cursor-pointer' onClick={hanldeClick} >
          <p className='font-bold mx-2'>ADD </p>
          <MdOutlineAddBox className='text-2xl' />
        </div>


      </div>
      <BooksCard books={books} />

      {showModel && model}

    </div>


  )
}

export default home