import React, { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const {id} = useParams()

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put(`http://localhost:8000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book updated successfully", { variant: "success" });
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
      <BackButton />
     
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col  border-2 border-sky-400 rounded-xl w-[600px] p-4 my-10 mx-auto">
      <h1 className="text-3xl my-4">Edit book</h1>
        <div className="my-4">
          <label className="text-xl text-gray-500 mr-4">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl text-gray-500 mr-4">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl text-gray-500 mr-4">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
          
        </div>
        <button className=' p-2 bg-sky-300 w-full my-5 hover:bg-sky-500' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditBook