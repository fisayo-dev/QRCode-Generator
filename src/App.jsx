import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import AppLayout from "./layouts/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Generate from "./pages/Generate";
import Scan from "./pages/Scan";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<AppLayout />}>
        <Route path="*" element={<PageNotFound />} />
        <Route index element={<Home />} />
        <Route path="/generate" element={<Generate /> } />
        <Route path="/scan" element={ <Scan />} />
      </Route>
      </>
    )
  )
  return  <RouterProvider router={router}/>
}

export default App;
