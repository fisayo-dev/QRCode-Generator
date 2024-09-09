import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-transparent text-white py-5">
      <div className="app-container">
        <div className="flex justify-between items-center">
          <h2 className="text-1xl font-bold">All rights reserved 2024</h2>
          <div className="flex items-center gap-5">
            <h2>Developer || Fisayo Obadina</h2>
            <div className="flex items-center gap-1">
              <Link to="https://www.x.com/fisayocoder" rel="noopener noreferrer" target="_blank">
                <FaXTwitter />
              </Link>
              <Link to="https://www.github.com/fisayo-dev" rel="noopener noreferrer" target="_blank">
                <FaGithub />
              </Link>
              <Link to="https://web.facebook.com/olufisayo.obadina/" rel="noopener noreferrer" target="_blank">
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
