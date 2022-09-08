import React from "react";
import Entries from "././Entries/SingleEntry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowLoader from "../../components/Loader/ShowLoader";

// const MasterList = React.lazy(() => import('././MasterList/MasterList'));
// const Entries = React.lazy(() => import('././Entries/Entries'));
// const CreateOutwardSwift = React.lazy(() => import('././CreateOutward/CreateOutwardSwift'));

const CustomerTransferOutward = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/customerfundtransfer/singleentry"
            element={<Entries />}
          ></Route>
          {/* <Route
          path="master-list"
          element={
            <React.Suspense fallback={<ShowLoader />}>
              <MasterList />
            </React.Suspense>
          }
        /> */}
          {/* <Route
          path="single-entries"
          element={
            <React.Suspense fallback={<ShowLoader />}>
              <Entries />
            </React.Suspense>
          }
        /> */}
          {/* <Route
          path="create-outwards-swift"
          element={
            <React.Suspense fallback={<ShowLoader />}>
              <CreateOutwardSwift />
            </React.Suspense>
          }
        /> */}
        </Routes>
      </Router>
    </>
  );
};

export default CustomerTransferOutward;
