import React, { Component } from "react";
import { toast } from "react-toastify";
import { List } from "../components/List/index";
import Book from "../components/Book/index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };

    handleBookDelete = async id => {
        const originalBooks = this.state.books;
        try {
            await API.deleteBook(id).then(res => this.getBooks());
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toast.error("This book has been deleted.");
            this.setState({ books: originalBooks });
        }
    };
    render() {
        const { length: count } = this.state.books;
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-11">
                        <br></br>
                        <div className="mb-3">
                            <div className="bd-highlight ">
                                <Link to="/search" style={{ textDecoration: "none", color: "white", fontFamily: "Special Elite" }}>
                                    <FontAwesomeIcon icon={faArrowAltCircleLeft}
                                        style={{ color: "white", fontSize: "1.8rem", cursor: "pointer", marginTop: ".3rem" }}

                                    /> Back to Search</Link>

                            </div>
                            <h2 className="heading-subtitle mb-2 ml-auto"

                                style={{
                                    marginTop: ".8rem",
                                    color: "whitesmoke",
                                    backgroundColor: "#189ff0",
                                    fontFamily: "Special Elite",
                                    alignContent: "right",
                                    padding: "3px",
                                    borderRadius: "5px",
                                    fontSize: "1.1rem"
                                }}                                >
                                Displaying <span style={{
                                    backgroundColor: "black",
                                    padding: "2px",
                                    paddingTop: "2px",
                                    borderRadius: "2px",
                                    textAlign: "center",
                                    lineHeight: "3px",
                                    position: "center"
                                }}>{count}</span> book(s) in your saved searches.
</h2>
                        </div>
                    </div>

                </div>
                <div className="row" fixed="top">
                    <div className="col-md-11 col-s-11 col-xs-12 card-content" style={{ padding: ".75rem" }} >

                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <Book
                                        key={book._id}
                                        title={book.title}
                                        subtitle={book.subtitle}
                                        link={book.link}
                                        authors={book.authors.join(", ")}
                                        description={book.description}
                                        image={book.image}
                                        Button={() => (
                                            <button
                                                onClick={() => this.handleBookDelete(book._id)}
                                                className="btn delete-button heading-subtitle ml-2"
                                            >
                                                Delete
                                            </button>
                                        )}
                                    />
                                ))}
                            </List>
                        ) : (
                                <div className="mockup-content">
                                    <h2 className="brand-title text-center">
                                        No saved books in the database
                </h2>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;