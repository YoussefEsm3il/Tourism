import React from "react";
import arr from '../../assets/Image'
const Scroll = () => {
    let btn = document.getElementById("btn");
    window.onscroll = function () {
      // eslint-disable-next-line no-restricted-globals
      if (scrollY >= 400) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };
    
    btn.addEventListener("click", function () {
      // eslint-disable-next-line no-restricted-globals
      scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    });
  return (
    <div>
      <button id="btn">
        <img src={arr} alt />
      </button>
    </div>
  );
};

export default Scroll;
