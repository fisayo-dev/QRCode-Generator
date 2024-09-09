import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { FaClipboard } from "react-icons/fa6";
import { useState } from "react";
// import QrScanner from 'react-qr-scanner'

const Scan = () => {
  const [scanResult, setScanResult] = useState(null);

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleScan = (data) => {
    if (data) setScanResult(data.text);
  };

  const handleError = (err) => {
    console.log(err);
  };

  return (
    <div className="py-10 h-[85vh]">
      <div className="app-container">
        <h2 className="text-5xl text-center mb-10">Still under development</h2>
        {/*
        <div className="py-5 grid justify-items-center">
          
            {scanResult && (
              <div className="flex items-center bg-slate-200 gap-3 text-slate-700 rounded-lg p-3">
                <p>{scanResult}</p>
                <FaClipboard className="cursor-pointer" />
              </div>
            )}
            <Button>
              Open Link
            </Button>
            <NavLink
              to="/generate"
              className="text-center py-2 hover:underline cursor-pointer"
            >
              Generate a QR Code
            </NavLink>
        </div> 
        </div>
          */}
      </div>
    </div>
  );
};

export default Scan;
