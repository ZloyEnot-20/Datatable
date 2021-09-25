import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const Pagination = ({ setCurrentPage, currentPage, elemsPerPage }) => {
  const data = useSelector((state) => state.data);
  const existingData = data.filter((item) => item.id);
  const numberOfButtons = [
    ...Array(Math.ceil(existingData.length / elemsPerPage)).keys(),
  ];

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handlePage = (action) => {
    if (action === "next" && currentPage !== numberOfButtons.length) {
      setCurrentPage((prev) => prev + 1);
    } else if (action === "previous" && currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__item" onClick={() => handlePage("previous")}>
        Prev
      </div>
      {numberOfButtons.map((item, index) => {
        return (
          <button
            style={
              currentPage === index + 1 ? { background: "greenyellow" } : {}
            }
            className="pagination__item"
            key={Math.random()}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        );
      })}

      <div className="pagination__item" onClick={() => handlePage("next")}>
        Next
      </div>
    </div>
  );
};

export default Pagination;
