import Login from "./pages/Login";
import Home from "./pages/Home";
// import CustomerFundTransfer from "./pages/CustomerFundTransfer/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import SingleEntryPage from "./pages/SingleEntryPage/SingleEntryPage";
import MultipleEntriesPage from "./pages/MultipleEntriesPage/MultipleEntriesPage";
import MasterList from "./pages/MasterList/MasterList";

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/singleEntryPage" element={<SingleEntryPage />}></Route>
          <Route path="/multipleEntriesPage" element={<MultipleEntriesPage />}></Route>
          <Route path="/masterList" element={<MasterList />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
