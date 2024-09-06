import Footer from "../components/Footer"
import Header from "../components/Header" 

const AppLayout = ({children}) => {
  return (
    <div className="bg-color">
      <Header />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout