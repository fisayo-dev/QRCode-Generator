const Features = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-5 text-slate-200">
        <h2 className="text-center font-bold text-4xl">Features</h2>
        <div className="grid-cols-1 md:grid-cols-3 grid gap-10">
          <div className="bg-slate-700 text-slate-100 rounded-lg grid p-5 text-center">
            <img src="" alt="" />
            <h2 className="font-bold text-2xl">Qr Code Gnerator</h2>
            <p>Intrix allows you to generate a qrcode for any link very fast</p>
          </div>
          <div className="bg-slate-700 text-slate-100 rounded-lg grid p-5 text-center">
            <img src="" alt="" />
            <h2 className="font-bold text-2xl">Downlad Qr code</h2>
            <p>After genrating a Qr code you can download it using intrix and it will be saved directly to your downloads folder.</p>
          </div>
          <div className="bg-slate-700 text-slate-100 rounded-lg grid p-5 text-center">
            <img src="" alt="" />
            <h2 className="font-bold text-2xl">Scan Code</h2>
            <p>Of course, you can just create only qr codes, you can scan any qr code unsing intrix and it will give you the accurate link.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
