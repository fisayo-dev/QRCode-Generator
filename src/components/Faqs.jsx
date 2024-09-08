import { FaCaretDown } from "react-icons/fa6";

const Faqs = () => {
  return (
    <div className="py-5">
      <div className="app-container">
        <div className="grid gap-7">
          <h2 className="text-center text-3xl">FAQS</h2>
          <div className="grid gap-5 mx-auto md:w-3/4 lg:3/5">
            <div className="flex bg-slate-800 gap-5 p-4 rounded-lg items-center justify-betweeen">
              <p>
                Who is the developer of Intrix
              </p>
              
              <div className="cursor-pointer">
                <FaCaretDown />
              </div>
            </div>
            <div className="flex bg-slate-800 gap-5 p-4 rounded-lg items-center justify-betweeen">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="cursor-pointer">
                <FaCaretDown />
              </div>
            </div>
            <div className="flex bg-slate-800 gap-5 p-4 rounded-lg items-center justify-betweeen">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="cursor-pointer">
                <FaCaretDown />
              </div>
            </div>
            <div className="flex bg-slate-800 gap-5 p-4 rounded-lg items-center justify-betweeen">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="cursor-pointer">
                <FaCaretDown />
              </div>
            </div>
            <div className="flex bg-slate-800 gap-5 p-4 rounded-lg items-center justify-betweeen">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="cursor-pointer">
                <FaCaretDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
