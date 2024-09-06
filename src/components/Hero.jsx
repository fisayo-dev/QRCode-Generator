import Button from "../components/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="py-5">
      <div className="app-container">
        <div className="text-slate-200 justify-items-center">
          <div className="grid gap-4 py-10 text-center">
            <h2 className="capitalize text-5xl md:text-6xl font-bold tracking-tight">
              The fast QR Code link generator
            </h2>
            <p>Just paste link, click generate, wait a little and download.</p>
            <Link to="/generate">
              <Button styles="mx-auto">Get started now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
