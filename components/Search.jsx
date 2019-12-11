import React from "react";
import PropTypes from "prop-types";

function Search({ search }) {
  const [active, setActive] = React.useState(false);

  return (
    <form>
      <i className="material-icons">search</i>
      <input
        type="text"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        placeholder="Search here..."
        onChange={e => search(e.target.value)}
      />
      <style jsx>{`
        form {
          box-sizing: border-box;
          border-radius: 5px;
          padding: 0 16px;
          display: flex;
          height: 50px;
          margin-top: 16px;
          background: #fff;
          align-items: center;
          transition: box-shadow 400ms;
          box-shadow: ${active ? "0 4px 15px rgba(0,0,0,0.15)" : "none"};
        }

        input {
          box-sizing: border-box;
          margin-left: 10px;
          color: #484848;
          width: 100%;
          height: 40px;
          font-size: 16px;
          background: none;
          border: none;
          outline: none;
        }

        .material-icons {
            color: #000;
        }
      `}</style>
    </form>
  );
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

export default Search;
