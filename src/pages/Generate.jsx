import Button from "../components/Button";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Generate = () => {
  return (
    <div className="py-10 h-[85vh]">
      <div className="app-container">
        <div className="py-5 grid justify-items-center">
          <div className="grid gap-5">
            <h2 className="text-center text-3xl font-bold">
              What site would you like to visit to today?
            </h2>
            <div className="flex items-center bg-slate-200 gap-4 text-slate-700 rounded-lg p-5">
              <FaMagnifyingGlass />
              <input
                type="text"
                placeholder="Paste your link here. e.g https://www.anylink.com"
              />
            </div>
            <div className="bg-slate-500 p-5 rounded-lg overflow-hidden"></div>
            <Button>Generate</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
