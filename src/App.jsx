import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import { PageNotFound, Generate, Scan, Home } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppLayout />}>
          <Route path="*" element={<PageNotFound />} />
          <Route index element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/scan" element={<Scan />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
