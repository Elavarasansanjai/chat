import React from "react";
import { IoMdAttach } from "react-icons/io";
import { FcAddImage } from "react-icons/fc";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />

      <div className="send">
        <div className="chatIcon">
          <IoMdAttach />
        </div>
        <input type="file" style={{ display: "none" }} id="file" />
        <label className="chatIcon" htmlFor="file">
          <FcAddImage />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
export default Input;
