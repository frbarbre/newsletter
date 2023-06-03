import React from "react";

const Button = ({ type, text, error, onclick }) => {
  return (
    <button
      type={type}
      className={`${
        error
          ? "bg-gray-400 cursor-default"
          : "bg-news-darkgray hover:bg-gradient-to-r hover:from-primary hover:to-primary-friend hover:shadow-lg hover:shadow-primary-shadow"
      } transition-colors py-3  font-bold text-news-white mt-4 rounded-lg`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
