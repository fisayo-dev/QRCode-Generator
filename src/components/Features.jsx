import { Link } from "react-router-dom";
import { FaDownload, FaQrcode, FaCamera } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="py-5">
      <div className="app-container">
        <div className="grid gap-5 text-slate-200 ">
          <h2 className="text-center font-bold text-4xl">
            What's unique about us?
          </h2>
          <div className="grid-cols-1 items-center md:grid-cols-3 grid gap-5">
            <div className="bg-slate-800 rounded-lg grid gap-2 text-left items-center h-25 overflow-hidden">
              <p className="py-5 mt-5 text-6xl mx-auto flex justify-center ">
                <FaDownload />
              </p>
              <div className="p-5 grid gap-1">
                <h2 className="font-bold text-2xl">Downlad Qr code</h2>
                <p>
                  After generating a Qr code you can download it using intrix and
                  it will be saved directly to your pc.
                </p>
                <Link to="/generate" className="hover:underline font-bold">
                  Try the app
                </Link>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg grid gap-2 text-left items-center h-25 overflow-hidden">
              <p className="py-5 mt-5 text-6xl mx-auto flex justify-center ">
                <FaQrcode />
              </p>
              <div className="p-5 grid gap-1">
                <h2 className="font-bold text-2xl">Qr Code Generator</h2>
                <p>
                  Intrix allows you to generate a qrcode for any link very fast.
                </p>
                <Link to="/generate" className="hover:underline font-bold">
                  Try Generator
                </Link>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg grid gap-2 text-left items-center h-25 overflow-hidden">
              <p className="py-5 mt-5 text-6xl mx-auto flex justify-center ">
                <FaCamera />
              </p>
              <div className="p-5 grid gap-1">
                <h2 className="font-bold text-2xl">Scan Code</h2>
                <p>
                  Of course, you can't only just create qr codes, you can scan any
                  qr code using intrix and it will give you the accurate link.
                </p>
                <Link to="/scan" className="hover:underline font-bold">
                  Try Scanner
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
