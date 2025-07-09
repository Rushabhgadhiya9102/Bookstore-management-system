import React, { useEffect, useState, useRef } from "react";
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
import { toast } from "react-toastify";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [textFilter, setTextFilter] = useState("");
  const { books } = useSelector((state) => state.books);
  const hideForm = useSelector((state) => state.form.show);
  const dispatch = useDispatch();
  const searchRef = useRef();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
    console.log(id);
    toast.success("Delete Successfull")
  };

  const handleUpdate = (book) => {
    dispatch(setSelectedBooks(book));
    dispatch(showForm());
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const matchesGenre = selectedGenre ? book.gerne === selectedGenre : true;
    const matchesSearch =
      book.bookName?.toLowerCase().includes(textFilter.toLowerCase()) ||
      book.authorName?.toLowerCase().includes(textFilter.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  return (
    <>
      <article>
        {/* --------- header ------------ */}
        <Header />

        {/* --------- banner section ----------- */}

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
                    alt="banner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------- book collection ------------ */}

        <section className="book-collection py-5">
          <div className="container">
            <div className="title mb-5 d-flex justify-content-between align-items-center">
              <h2 className="text-primary text-center fw-bold">
                Explore Collections
              </h2>

                <div className="ms-auto me-2">
                  <input
                    type="search"
                    placeholder="search"
                    onChange={(e) => setTextFilter(e.target.value)}
                    value={textFilter}
                    ref={searchRef}
                    className="form-control"
                  />
                </div>
              <div className=" me-2" style={{ width: "100px" }}>

                <select
                  name="gerne"
                  id="taskType"
                  className="form-control"
                  onChange={handleGenreChange}
                  value={selectedGenre || ""}
                >
                  <option value="">Sort</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Biography">Biography</option>
                  <option value="Science">Science</option>
                  <option value="Business">Business</option>
                  <option value="Self-Help">Self-Help</option>
                  <option value="Fantasy">Fantasy</option>
                </select>
              </div>
              <button
                onClick={() => dispatch(showForm())}
                className="btn btn-primary"
              >
                + Add <FaBookAtlas />
              </button>
            </div>

            {hideForm && <Form />}

            <div className="row g-3">
              {filteredBooks.map((val, index) => {
                const { bookName, authorName, price, gerne, date, id } = val;

                return (
                  <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                    <div className="book-item">
                      <div className="card shadow pb-2 border-0">
                        <div
                          className="book-icons d-flex justify-content-center align-items-center text-primary"
                          style={{ height: "200px" }}
                        >
                          <FaBookAtlas size={150} />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">{bookName}</h4>
                          <p className="text-secondary">
                            By{" "}
                            <span className="fw-bold text-primary">
                              {authorName}
                            </span>{" "}
                            on {date}
                          </p>
                          <p className="card-text text-primary fw-semibold">
                            ₹ {price}
                          </p>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center border-0 bg-white">
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleDelete(id)}
                          >
                            <FaTrash />
                          </button>
                          <p className="text-secondary fw-semibold mb-0">
                            {gerne}
                          </p>
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
