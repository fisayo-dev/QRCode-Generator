import Footer from "../components/Footer"
import Header from "../components/Header" 
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div className="bg-color w-full">
      <Header />
      <div className="pt-20 text-slate-200 grid gap-10 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout