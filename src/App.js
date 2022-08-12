import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateTask from "./pages/CreateTask";
import Dashboard from "./pages/Dashboard";
import Footer from "./pages/Footer";
import Group from "./pages/Groups";
import GroupDetails from "./pages/GroupDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ManageGroups from "./pages/ManageGroups";
import Navbar from "./pages/Navbar";
import Pending from "./pages/Pending";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Submitted from "./pages/Submitted";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="groups" element={<Group />}>
          <Route path=":groupID" element={<GroupDetails />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="/dashboard/managegroups" element={<ManageGroups />} />
          <Route path="/dashboard/pending" element={<Pending />} />
          <Route path="/dashboard/submitted" element={<Submitted />} />
          <Route path="/dashboard/taskpage" element={<TaskPage />} />
          <Route path="/dashboard/createtask" element={<CreateTask />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
