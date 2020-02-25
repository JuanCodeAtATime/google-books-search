import React from "react";

const SearchBox = ({ value, onChange }) => {
    return (
        <input
            type="text"
            name="query"
            className="form-control my-3"
            palceholder="What book are you looking for?..."
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        />
    );
};

export default SearchBox;