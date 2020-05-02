import React, { Component } from "react";
import { toast } from "react-toastify";
import Book from "../components/Book/index";
import SearchForm from "../components/SearchForm/index";
import { List } from "../components/List/index";
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        q: "",
        message: "Nothing found here...Please enter another book title"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // componentDidMount() {
    //     this.getGoogleSearchBooks();
    // }

    getGoogleSearchBooks = () => {
        API.getGoogleSearchBooks(this.state.q)
            .then(res => {
                this.setState({
                    books: res.data.items,
                    currentPage: 1

                })
            })
            .catch(() => {
                toast.error("Your search did not match any book results.");

                this.setState({
                    books: [],
                    message: "Your search did not match any book results.",
                    currentPage: 1
                });
            });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        toast.info("Searching books... !");
        this.getGoogleSearchBooks();
    };


    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
        toast.error(book.volumeInfo.title + " has been successfully saved!");

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        })
    };

    render() {
        // console.log('books sstate', this.state.books)
        // console.log('books state length', this.state.books.length)
        return (
            <div className="container" style={{ marginTop: "3rem" }}>
                <div className="row">

                    <div className="mr-auto mb-4">
                        <h5 style={{ color: "whitesmoke", fontFamily: "Special Elite", marginLeft: "3px" }}>
                            Enter Book Title
                                </h5>

                        <SearchForm
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            q={this.state.q}
                        />
                    </div>
                    <div className="col-md-11 col-s-11 col-xs-12 card-content"
                        style={{
                            backgroundColor: "white",
                            paddingTop: "1rem"

                        }}>
                        <h4 className="text-center" style={{
                            color: "black",
                            fontFamily: "Special Elite",
                            padding: "5px 5px",
                            margin: "auto 5px"

                        }}>Results</h4>

                        {!!this.state.books ? (
                            <List>
                                {this.state.books.map(book => (
                                    <Book
                                        key={book.id}
                                        title={book.volumeInfo.title}
                                        subtitle={book.volumeInfo.subtitle}
                                        link={book.volumeInfo.infoLink}
                                        authors={book.volumeInfo.authors}
                                        description={book.volumeInfo.description}
                                        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                                        Button={() => (
                                            <button
                                                style={{ backgroundColor: "green", color: "white" }}
                                                onClick={(e) => this.handleBookSave(book.id)}
                                                className="btn save-button  heading-subtitle ml-2"
                                            >
                                                Save
                                            </button>
                                        )}
                                    />
                                ))}
                            </List>
                        ) : (
                                <div className="mockup-content">
                                    <h2 className="heading-title text-center">
                                        {this.state.message}
                                    </h2>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;