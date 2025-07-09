import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../features/thunk/thunk";
import { clearSelectedBooks } from "../features/books/booksSlice";

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
      dispatch(clearSelectedBooks())  
    } else {
      dispatch(addData(bookData));
      setBookData({})
      console.log(bookData);
    }
  };

  return (
    <>
      <section className="container">
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
              value={bookData.bookName || ''}
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
              value={bookData.authorName || ''}
              className="form-control"
            />
          </div>

          <button className="btn btn-primary">{selectedBooks? "Update" : "Submit"}</button>
        </form>
      </section>
    </>
  );
};

export default Form;
