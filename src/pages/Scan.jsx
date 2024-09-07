import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { FaClipboard } from "react-icons/fa6";
import { useState } from "react";

const Scan = () => {
  const [inputField, setInputField] = useState('')
  return (
    <div className="py-10 h-[85vh]">
      <div className="app-container">
        <div className="py-5 grid justify-items-center">
          <div className="grid gap-5">
            <h2 className="text-center text-3xl font-bold">
              Place you QR code for Intrix to scan!!
            </h2>
            <div className="bg-slate-500 p-5 rounded-lg overflow-hidden"></div>
            <div className="flex items-center bg-slate-200 gap-3 text-slate-700 rounded-lg p-3">
              <input
                type="text"
                placeholder="Paste your link here. e.g https://www.anylink.com"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
              />
              <FaClipboard className="cursor-pointer"/>
            </div>
            <Button disabled={inputField.trim() == "" ? true : false}>Open Link</Button>
            <NavLink
            to="/generate"  className="text-center py-2 hover:underline cursor-pointer">Generate a QR Code</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
