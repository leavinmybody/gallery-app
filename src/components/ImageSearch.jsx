import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-md rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="shadow-md appearance-none bg-white rounded-md border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search for an image..."
          />
          <button
            className="flex-shrink-0 bg-orange hover:bg-secondary text-sm hover:scale-105 duration-200 transition ease-in-out text-white py-1 px-2 rounded active:scale-95 active:bg-secondaryDark"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
