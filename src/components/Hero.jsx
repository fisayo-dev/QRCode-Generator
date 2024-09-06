import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="app-container">
      <div className="text-slate-200 justify-items-center">
        <div className="grid gap-4 py-10 text-center">
          <h2 className="capitalize text-5xl md:text-6xl font-bold tracking-tight">
            The fast QR Code link generator
          </h2>
          <p>Just paste link, click generate, wait a little and download.</p>
          <Button styles="mx-auto">Get started now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero