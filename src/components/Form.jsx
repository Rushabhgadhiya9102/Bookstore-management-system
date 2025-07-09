import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../features/thunk/thunk";
import { clearSelectedBooks } from "../features/books/booksSlice";
import { hideForm } from "../features/hide/hideShowSlice";
import { RxCrossCircled } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";

const Form = () => {
  // ---------------- state ------------------
  const [bookData, setBookData] = useState({});
  const dispatch = useDispatch();
  const selectedBooks = useSelector((state) => state.books.selectedBooks);

  // ---------------- use effect -----------------

  useEffect(() => {
    if (selectedBooks) {
      setBookData(selectedBooks);
    } else {
      setBookData({});
    }
  }, [selectedBooks]);

  // -------------- handle change --------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  // ------------- handle submit --------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBooks) {
      dispatch(updateData(bookData));
      dispatch(clearSelectedBooks());
      dispatch(hideForm());
    } else {
      dispatch(addData(bookData));
      setBookData({});
      dispatch(hideForm());
      console.log(bookData);
    }
  };

  // --------------- handle cancle --------------
  const handleCancle = (e) => {
    e.preventDefault();
    setBookData({});
    dispatch(hideForm());
  };

  return (
    <>
      <section className="container">
        <form method="post" className="my-5 d-flex gap-3 align-items-center">
          <div className="w-100">
            <input
              type="text"
              id="bookName"
              placeholder={'Book Name'}
              onChange={handleChange}
              name="bookName"
              value={bookData.bookName || ""}
              className="form-control"
            />
          </div>
          <div className="w-100">
            <input
              type="text"
              id="authorName"
              placeholder={'Author Name'}
              onChange={handleChange}
              name="authorName"
              value={bookData.authorName || ""}
              className="form-control"
            />
          </div>
          <div className="w-100">
            <input
              type="number"
              id="price"
              placeholder={'Book Price'}
              onChange={handleChange}
              name="price"
              value={bookData.price || ""}
              className="form-control"
            />
          </div>

          <div className="w-100">
            <input
              type="date"
              id="date"
              onChange={handleChange}
              name="date"
              value={bookData.date || ""}
              className="form-control"
            />
          </div>

          <div className="w-100">
             <select
                name="gerne"
                id="taskType"
                className="form-control"
                onChange={handleChange}
                value={bookData.gerne || ""}
              >
                <option value="">--- Select Gerne ---</option>
                <option value="Fiction">Fiction</option>
                <option value="Biography">Biography</option>
                <option value="Science">Science</option>
                <option value="Business">Business</option>
                <option value="Self-Help">Self-Help</option>
                <option value="Fantasy">Fantasy</option>
                
              </select>
          </div>

         <div className="w-50">
           <button className={`btn ${selectedBooks ? "btn-success" : "btn-primary"}`} onClick={handleSubmit}>
            <SiTicktick size={20} />
          </button>
          <button className="btn btn-danger ms-2" onClick={handleCancle}>
            <RxCrossCircled size={20} />
          </button>
         </div>
        </form>
      </section>
    </>
  );
};

export default Form;
