import React from "react";
import Data from "./Components/Data";
import Navbar from "./Components/Navbar";
import SearchItemList from "./Components/SearchItemList";
const App = () => {
  return (
    <div>
      <Navbar />
      <SearchItemList />
      <Data />
    </div>
  );
};

export default App;
