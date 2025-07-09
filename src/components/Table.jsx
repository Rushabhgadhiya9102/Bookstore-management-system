import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData } from "../features/thunk/thunk";
import { setSelectedBooks } from "../features/books/booksSlice";

const Table = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
    console.log(id);
  };

  const handleUpdate = (book)=>{
    dispatch(setSelectedBooks(book))
  }

  return (
    <>
      <section className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((val, index) => (
              <tr key={index}>
                <td>{val.bookName}</td>
                <td>{val.authorName}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(val.id)}
                  >
                    D
                  </button>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => handleUpdate(val)}
                  >
                    E
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
