import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-10 bg-transparent backdrop-blur-md text-white px-5 py-3">
      <div className="app-container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h2 className="text-2xl font-bold">Intrix</h2>
          </Link>
          <div className="flex text-center justify-center gap-3">
            <p className="cursor-pointer developer-drop-down-text relative">
              <p>Developer</p>
              <div
                className="hidden developer-drop-down border-2 bg-color border-slate-400  z-90 p-5 rounded-lg"
              >
                <div className="flex items-center gap-5 w-full">
                  <img src="" alt="" />
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum optio fugit voluptatum repellat facilis libero
                    eligendi, dignissimos rerum, aliquam iste consectetur.{" "}
                  </p>
                </div>
              </div>
            </p>
            <p className="cursor-pointer ">Support</p>
          </div>
          <Button>Github</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
