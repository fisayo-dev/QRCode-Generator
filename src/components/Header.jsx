import Button from "./Button";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-10 bg-transparent border-b-2 border-slate-600 backdrop-blur-md text-white px-5 py-3">
      <div className="container mx-auto px-4">
        <div className="flex  justify-between items-center">
          <h2 className="text-2xl font-bold">QrCode Generator</h2>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
