import Button from "../components/Button";
import AppLayout from "../layouts/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 text-slate-300">
        <div className="grid justify-items-center">
          <div className="grid gap-4 py-10 text-center">
            <h2 className="capitalize text-6xl font-bold tracking-tight">The fast QR Code link generator</h2>
            <p>Just paste link, click generate, wait a little and download.</p>
            <Button styles="mx-auto">Get started now</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
