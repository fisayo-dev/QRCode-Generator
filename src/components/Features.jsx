import image from "../assets/image.png";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <div className="app-container">
      <div className="grid gap-5 text-slate-200">
        <h2 className="text-center font-bold text-4xl">
          What's unique about us?
        </h2>
        <div>
          <div className="grid-cols-1 items-center md:grid-cols-3 grid gap-10">
            <div className="bg-slate-800 mx-4 md:mx-0  rounded-lg grid gap-2  text-left items-center h-25 overflow-hidden">
              <p className="p-5 mx-auto flex justify-center bg-slate-600 mt-5">Hi</p>
              <div className="p-5 grid gap-1">
                <h2 className="font-bold text-2xl">Downlad Qr code</h2>
                <p>
                  After genrating a Qr code you can download it using intrix and
                  it will be saved directly to your downloads folder.
                </p>
                <Link to="/generate" className=" font-bold">
                  Try the app{" "}
                </Link>
              </div>
            </div>
            <div className="bg-slate-800 mx-4 md:mx-0  rounded-lg grid gap-2 text-left items-center h-25 overflow-hidden">
              <p className="p-5 mx-auto flex justify-center bg-slate-600 mt-5">Hi</p>
              <div className="p-5 grid gap-1">
                <h2 className="font-bold text-2xl">Qr Code Generator</h2>
                <p>
                  Intrix allows you to generate a qrcode for any link very fast.
                </p>
                <Link to="/generate" className=" font-bold">
                  Try the app{" "}
                </Link>
              </div>
            </div>
            <div className="bg-slate-800 mx-4 md:mx-0  rounded-lg grid gap-2 text-left items-center h-25 overflow-hidden">
              <p className="p-5 mx-auto flex justify-center bg-slate-600 mt-5">Hi</p>
              <div className="p-5 grid gap-1">
                <h2 className="font-bold text-2xl">Scan Code</h2>
                <p>
                  Of course, you can just create only qr codes, you can scan any
                  qr code unsing intrix and it will give you the accurate link.
                </p>
                <Link to="/scan" className=" font-bold">
                  Try the app{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
