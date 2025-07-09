import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData } from "../features/thunk/thunk";
import { setSelectedBooks } from "../features/books/booksSlice";

const Table = () => {
  const { books } = useSelector((state) => state.books);
  

  return (
    <>
      <section className="container">
        <table className="table table-striped">
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
