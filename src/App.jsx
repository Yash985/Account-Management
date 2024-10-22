import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const users = [];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/signin" />} />
          <Route path="/signup" element={<Signup users={users} />} />
          <Route path="/signin" element={<Signin users={users} />} />
          <Route path="/profile/:email" element={<Profile users={users} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
