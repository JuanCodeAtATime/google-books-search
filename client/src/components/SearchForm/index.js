import React from "react";
import "./style.css";

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
    return (
        <form className="form-inline">
            <div className="form-group" style={{ marginLeft: "3px" }}>
                <input
                    className="form-control heading-subtitle "
                    id="Title"
                    type="text"
                    value={q}
                    placeholder="What Book Are You Searching For?..."
                    name="q"
                    onChange={handleInputChange}
                    size="55"
                    style={{ letterSpacing: "1.3px" }}
                    required
                />
            </div>
            <button
                onClick={handleFormSubmit}
                style={{ marginLeft: "5px", color: "whitesmoke" }}
                type="submit"
                className="btn btn-lg bg-primary search-button heading-subtitle"
            >
                Search
      </button>
        </form>
    );
}

export default SearchForm;