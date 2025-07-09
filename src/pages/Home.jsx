import React, { useEffect } from "react";
import Header from "../components/Header";
import bannerImg from "../assets/banner-img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData } from "../features/thunk/thunk";
import { setSelectedBooks } from "../features/books/booksSlice";
import { FaTrash } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { showForm } from "../features/hide/hideShowSlice";
import Form from "../components/Form";
import { FaBookAtlas } from "react-icons/fa6";

const Home = () => {
  const { books } = useSelector((state) => state.books);
  const hideForm = useSelector((state) => state.form.show);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
    console.log(id);
  };

  const handleUpdate = (book) => {
    dispatch(setSelectedBooks(book));
  };

  return (
    <>
      <article>
        <Header />
        <section className="banner-section bg-light">
          <div className="container">
            <div className="row vh-100 align-items-center">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="banner-item">
                  <div className="content">
                    <p className="text-primary fs-5">
                      Featured Book of the Month
                    </p>
                    <h1 className="fw-bold display-4">The Midnight Library</h1>
                    <p className="fs-4 text-secondary">
                      Between life and death there is a library, and within that
                      library, the shelves go on forever. Every book provides a
                      chance to try another life you could have lived.
                    </p>
                    <button className="btn btn-primary me-2">Buy Now</button>
                    <button className="btn btn-outline-primary">
                      Read Sample
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="banner-item d-flex">
                  <img
                    src={bannerImg}
                    className="w-50 mx-auto rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="book-collection py-5">
          <div className="container">
            <div className="title">
              <h2 className="text-primary text-center fw-bold mb-5">
                Explore Collections
              </h2>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <button
                onClick={() => dispatch(showForm())}
                className="btn btn-primary"
              >
                + Add <FaBookAtlas />
              </button>
            </div>

            {hideForm && <Form />}

            <div className="row g-3">
              {books.map((val, index) => {
                const { bookName, authorName, price, id } = val;

                return (
                  <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                    <div className="book-item">
                      <div className="card shadow pb-2 border-0">
                        <img
                          src="..."
                          className="card-img-top"
                          height={"200px"}
                          alt="..."
                        />
                        <div className="card-body">
                          <h4 className="card-title">{bookName}</h4>
                          <p className="card-text mb-0">{authorName}</p>
                          <p className="card-text text-primary fw-semibold">
                            ₹ {price}
                          </p>
                        </div>
                        <div className="card-footer d-flex border-0 bg-white">
                          <button
                            className="btn btn-outline-danger me-auto"
                            onClick={() => handleDelete(id)}
                          >
                            <FaTrash />
                          </button>
                          <button
                            className="btn btn-outline-warning"
                            onClick={() => handleUpdate(val)}
                          >
                            <BsPencilSquare />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;
