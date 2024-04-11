
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function BackButton({ destination = '/' }) {
  return (
    <div className='flex mx-10 my-2'>
        <Link 
            to={destination}
            className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
                <BsArrowLeft className='text-xl' />
            </Link>


    </div>
  )
}

export default BackButton