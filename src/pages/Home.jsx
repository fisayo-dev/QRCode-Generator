import Hero from "../components/Hero";
import Features from "../components/Features";

import AppLayout from "../layouts/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <Features />
    </AppLayout>
  );
};

export default Home;
