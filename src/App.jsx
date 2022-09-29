import Login from "./pages/Login";
import Home from "./pages/Home";
// import CustomerFundTransfer from "./pages/CustomerFundTransfer/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import SingleEntryPage from "./pages/SingleEntryPage/SingleEntryPage";
import MultipleEntriesPage from "./pages/MultipleEntriesPage/MultipleEntriesPage";
import MasterList from "./pages/MasterList/MasterList";
import SingleAchEntries from "./pages/SingleAchEntries/SingleAchEntries";
import OutwardMultipleUpload from "./pages/OutwardMultipleUpload/OutwardMultipleUpload";
import InwardMasterList from "./pages/InwardMasterList/InwardMasterList";
import TestPage from "./pages/TestPage/TestPage";

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
          <Route path="/singleAchEntries" element={<SingleAchEntries />}></Route>
          <Route path="/outwardMultipleUpload" element={<OutwardMultipleUpload />}></Route>
          <Route path="/inwardMasterList" element={<InwardMasterList />}></Route>
          <Route path="/testPage" element={<TestPage />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
