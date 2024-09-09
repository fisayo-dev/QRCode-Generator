import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { FaMagnifyingGlass, FaDownload } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { QRCode } from "react-qrcode-logo";

const Generate = () => {
  const [inputField, setInputField] = useState("");
  const [disableBtn, setDisableBtn] = useState(true)
  
  // Function to download the QR code as PNG
  const qrCodeRef = useRef(null);
  const downloadQRCode = () => {
    const canvas = qrCodeRef.current.querySelector("canvas"); // Find the canvas inside the QR code component
    const pngUrl = canvas.toDataURL("image/png"); // Get the PNG data URL of the canvas
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl; // Set the link of the a tag to the png url
    downloadLink.download = `Intrix -- ${inputField}.png`; // The file name for the downloaded QR code
    document.body.appendChild(downloadLink); // Adds a tag to DOM
    downloadLink.click(); // Renders click fucntionalty when clicked on download button
    document.body.removeChild(downloadLink); // Remove body immediately
  };

  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;  
    }
  }
  
  useEffect(() => {
    if (isValidURL(inputField) && inputField.trim() !== "" ) {
      setDisableBtn(false)
    } else {
      setDisableBtn(true)
    }
  },[inputField])

  return (
    <div className="py-10 ">
      <div className="app-container">
        <div className="py-5 grid justify-center">
          <div className="grid gap-5">
            <h2 className="text-center text-3xl font-bold">
              What site would you like to visit to today?
            </h2>
            <div className="flex items-center bg-slate-200 gap-4 text-slate-700 rounded-lg p-5">
              <FaMagnifyingGlass />
              <input
                type="text"
                placeholder="Paste your link here. e.g https://www.anylink.com"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
              />
            </div>
            <div
              ref={qrCodeRef}
              className={`bg-slate-900 rounded-lg overflow-hidden ${disableBtn ? 'hidden': 'grid'} justify-items-center`}
            >
              {inputField.trim() !== "" && (
                <QRCode value={inputField} size={350} fgColor="#000000" />
              )}
            </div>
            <Button
              disabled={disableBtn}
              styles="flex items-center gap-5 justify-center"
              onClick={downloadQRCode}
            >
              <FaDownload />
              <p>Download</p>
            </Button>
            <NavLink
              to="/scan"
              className="text-center py-2 hover:underline cursor-pointer"
            >
              Scan a QR Code
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
