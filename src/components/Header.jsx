import Button from "./Button";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-10 bg-transparent backdrop-blur-md text-white px-5 py-3">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Intrix</h2>
          <div className="flex text-center justify-center gap-3">
            <p>Developer</p>
            <p>Support</p>
          </div>
          <Button>Github</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
