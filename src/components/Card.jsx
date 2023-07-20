import React from "react";

const Card = ({ label, link, linkText, onClick }) => {
  return (
    <a
      href={link}
      className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full w-full hover:bg-gray-200"
      role="alert"
      target="_blank"
      onClick={onClick}
    >

      <span className="text-xs w-[100px] bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3 w-30">
        {label}
      </span>{" "}

      <span className="text-sm font-medium">{linkText}</span>
      
      <svg
        className="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
};

export default Card;
