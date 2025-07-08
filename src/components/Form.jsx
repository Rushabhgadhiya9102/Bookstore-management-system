import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../features/thunk/thunk";

const Form = () => {
  const [bookData, setBookData] = useState({});
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addData(bookData))
    console.log(bookData)
    
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            id="bookName"
            onChange={handleChange}
            name="bookName"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="authorName" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            id="authorName"
            onChange={handleChange}
            name="authorName"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Submit </button>
      </form>
    </>
  );
};

export default Form;
