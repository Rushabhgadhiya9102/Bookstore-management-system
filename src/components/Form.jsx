import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../features/thunk/thunk";
import { clearSelectedBooks } from "../features/books/booksSlice";
import { hideForm } from "../features/hide/hideShowSlice";

const Form = () => {
  const [bookData, setBookData] = useState({});
  const dispatch = useDispatch();
  const selectedBooks = useSelector((state) => state.books.selectedBooks);

  useEffect(() => {
    if (selectedBooks) {
      setBookData(selectedBooks);
    } else {
      setBookData({});
    }
  }, [selectedBooks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBooks) {
      dispatch(updateData(bookData));
      dispatch(clearSelectedBooks());
    } else {
      dispatch(addData(bookData));
      setBookData({});
      dispatch(hideForm());
      console.log(bookData);
    }
  };

  const handleCancle = (e) => {
    e.preventDefault()
    setBookData({});
    dispatch(hideForm());
  };

  return (
    <>
      <section className="container">
        <form method="post" className="my-5">
          <div className="mb-3">
            <label htmlFor="bookName" className="form-label">
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              onChange={handleChange}
              name="bookName"
              value={bookData.bookName || ""}
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
              value={bookData.authorName || ""}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              onChange={handleChange}
              name="price"
              value={bookData.price || ""}
              className="form-control"
            />
          </div>

          <button className="btn btn-primary" onClick={handleSubmit}>
            {selectedBooks ? "Update" : "Submit"}
          </button>
          <button className="btn btn-danger ms-2" onClick={handleCancle}>
            Cancle
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
