import "./App.css";
import { Box } from "@chakra-ui/react"
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Historypage from "./pages/Historypage";
import Explorepage from "./pages/Explorepage";
import WatchLaterpage from "./pages/WatchLaterpage";
import Playlistpage from "./pages/Playlistpage";
import Profilepage from "./pages/Profilepage";
import {Signuppage} from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import MockmanEs from "mockman-js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { RestrictedRoutes } from "./routes/RestrictedRoutes";
function App() {
  return (
    < >
      <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/explore"} element={<Explorepage/>}/>
        <Route element={<PrivateRoutes/>}>
            <Route path={"/watchlater"} element={<WatchLaterpage/>}/>
            <Route path={"/playlist"} element={<Playlistpage/>}/>
            <Route path={"/profile"} element={<Profilepage/>}/>
            <Route path={"/history"} element={<Historypage/>}/>
        </Route>
       <Route path="/mock" element={<MockmanEs/>}/>
       <Route element={<RestrictedRoutes/>}>
        <Route path={"/login"} element={<Loginpage/>}/>
        <Route path={"/signup"} element={<Signuppage/>}/>
        </Route>
      </Routes>
      <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
    </>
  );
}

export default App;
