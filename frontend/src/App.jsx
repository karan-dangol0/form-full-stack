import React, {useState} from "react";
import Form from "./component/Form.jsx";
import GetUsers from "./component/GetUsers.jsx";

import "./App.css";
const App = () => {
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(!refresh);
  }
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Form onUserAdded={handleRefresh} />
        <GetUsers refresh={refresh} />
      </div>
    </>
  );
};

export default App;
