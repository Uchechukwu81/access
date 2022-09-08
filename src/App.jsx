import Login from "./pages/Login";
import Home from "./pages/Home";
import CustomerFundTransfer from "./pages/CustomerFundTransfer/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/customerfundtransfer" element={<CustomerFundTransfer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
