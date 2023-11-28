import React from "react";
import "../../assets/styles/Pagination.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const links = [];

  for (let index = 0; index < totalPages; index++) {
    links.push(
      <a
        key={index}
        href={`?page=${index}`}
        onClick={(e) => {
          e.preventDefault();
          onPageChange(index);
        }}
        className={index === currentPage ? "active" : ""}
      >
        {index + 1}
      </a>
    );
  }

  return <div className="pagination">{links}</div>;
};

export default Pagination;