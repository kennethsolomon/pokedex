import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import './index.css'

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<Profile />} path='/profile' />
    //     <Route element={<Card />} path='/' errorElement={<ErrorPage />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={Router} />
  );
}

export default App
