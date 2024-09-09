import { Link } from "react-router-dom";
import Button from "./Button";
import { FaGithub, FaXTwitter, FaDev } from "react-icons/fa6";
import { SiDailydotdev } from "react-icons/si";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-10 bg-transparent backdrop-blur-md text-white py-5">
      <div className="app-container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h2 className="text-2xl font-bold">Intrix</h2>
          </Link>
          <div className="flex text-center justify-center gap-3">
            <p className="cursor-pointer developer-drop-down-text relative">
              <p>Developer</p>
              <div className="hidden developer-drop-down border-2 bg-color border-slate-400  z-90 p-5 rounded-lg">
                <div className="flex items-center gap-5 w-full">
                  <img src="" alt="" />
                  <div className="grid gap-2">
                    <p>
                      Hi, my name is <b>Fisayo Obadina.</b> I am web developer
                      with over 3 years of experience. My skills are HTML5,
                      CSS3, JavaScript, React, NodeJS, Git and Tailwind Css.
                    </p>
                    <div className="flex items-center gap-2">
                      <p>Follow me on: </p>
                      <Link
                        to="https://app.daily.dev/fisayodev"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <SiDailydotdev />
                      </Link>
                      <Link
                        to="https://www.x.com/fisayocoder"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaXTwitter />
                      </Link>
                      <Link
                        to="https://www.github.com/fisayo-dev"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaGithub />
                      </Link>
                      <Link
                        to="https://dev.to/fisayocoder"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaDev />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </p>
            <p className="cursor-pointer ">Support</p>
          </div>
          <Link
            to="https://github.com/fisayo-dev/QRCode-Generator"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button>Github Repo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
