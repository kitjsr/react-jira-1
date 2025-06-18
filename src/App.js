import logo from "./logo.png";
import "./App.css";
import { Link, Route, Routes } from "react-router";
import { Profile } from "./Components/Profile";
import Home from "./Components/Home";
import { Dashboard } from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { Image, NavDropdown } from "react-bootstrap";
import { SideNav } from "./Components/SideNav";
import { ForUser } from "./Components/ForUser";
import { Recent } from "./Components/Recent";
import { Starred } from "./Components/Starred";
import { Projects } from "./Components/Projects";
import { Teams } from "./Components/Teams";
import { Apps } from "./Components/Apps";
import { Plans } from "./Components/Plans";
import { Dummy } from "./Forms/Dummy";
import { SignUp } from "./Forms/SignUp";
import { SignIn } from "./Forms/SignIn";
import { UpdateProfile } from "./Forms/UpdateProfile";
import { Tasks } from "./Components/Tasks";
import { InvitePeople } from "./Forms/InvitePeople";

function App() {
  return (
    <div>
      <Nav className="justify-content-end" activeKey="/home">
        <Image src={logo} className="App-logo"></Image>
        <Nav.Item className="nav1">
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/dashboard">Dashboard</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/updateProfile">Update Profile</Link>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item className="nav1">
          <Nav.Link><Link to="/signUp">Sign Up</Link></Nav.Link>
        </Nav.Item>
         <Nav.Item className="nav1">
          <Nav.Link><Link to="/signIn">Sign In</Link></Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sideNav" element={<SideNav />} />
        <Route path="/forUser" element={<ForUser />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/invitePeople" element={<InvitePeople />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
