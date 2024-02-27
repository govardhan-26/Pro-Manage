import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnalyticsPage from "./pages/Analytics/Analytics.jsx";
import BoardPage from "./pages/Board/BoardPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register.jsx";
import SettingsPage from "./pages/Settings/Settings.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<BoardPage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
          <Route path="/analytics" element={<AnalyticsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
