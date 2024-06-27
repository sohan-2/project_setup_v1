import React from "react";

function CommonButton({ onClick }) {
  return (
    <button onClick={onClick} type="button">
      Post Data
    </button>
  );
}

export default CommonButton;
