import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";
import { MdDescription } from "react-icons/md";

function CreateBook({setShowModel}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true)
    axios
      .post("http://localhost:8000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div>


      {loading ? <spinner /> : ""}
      <div className="flex flex-col  border-2 border-sky-400 rounded-xl w-[90%] p-4 my-10 mx-auto bg-gray-400 opacity-90">
        <div className="flex items-center">
          <BackButton setShowModel={setShowModel}/>
          <h1 className="text-xl font-semibold mx-4">Create Book</h1>
        </div>

        <div className="my-3">
          <label className="text-xl text-black mx-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-[3px] w-full rounded-xl text-lg focus:outline-none "
            placeholder="Title"
          />
        </div>

        <div className="my-3">
          <label className="text-xl text-black mx-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-2xl text-xl focus:outline-none"
            placeholder="Author"
          />
        </div>

        <div className="my-3">
          <label className="text-xl text-black mx-2">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-2xl text-lg focus:outline-none"
            placeholder="Publish Year"
          />

        </div>

        {/* <div className="my-3">
          <label className="text-xl text-black mx-2">Description</label>
          <input
            type="text"
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-2xl text-xl"
            placeholder="Description"
          />

        </div> */}
        <button className=' p-2 bg-sky-300 w-full my-5 hover:bg-sky-500 rounded-2xl text-xl font-semibold' onClick={()=>{
          setShowModel(false);
          handleSaveBook();
        }}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
