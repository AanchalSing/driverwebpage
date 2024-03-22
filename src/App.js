import Navbar from "./Layouts/Navbar";
import Sidebar from "./Layouts/Sidebar";
import Registration from "./Pages/Registration";
import FirstLevel from "./Pages/FirstLevel";
import ViewPage from "./Pages/ViewPage";
import Login from "./Layouts/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Sidebar />
          <main id="main" className="main">
            <Routes>
              <Route path="" />
              <Route path="/registration" element={<Registration />} />
              <Route path="/firstlevel" element={<FirstLevel />} />
              <Route path="/viewpage" element={<ViewPage />} />
            </Routes>
          </main>
        </div>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
