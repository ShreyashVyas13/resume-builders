// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Features from "./pages/Features";
// import Footer from "./components/Footer";
// import Templates from "./pages/Templates";
// import About from "./pages/About"
// import Temp1 from "./pages/Temp1";
// import AdminDashboard from "./Admin/AdminDashboard";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <br />
//       <br />
//       <br />
//       <br />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/templates" element={<Templates />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/temp1" element={<Temp1 />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         {/* <Route path="/contact" element={<Contact />} /> */}
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Footer from "./components/Footer";
import Templates from "./pages/Templates";
import About from "./pages/About";
import Temp1 from "./pages/Temp1";
import AdminDashboard from "./Admin/AdminDashboard";
import Temp2 from "./pages/Temp2";
import Temp3 from "./pages/Temp3";
import Temp4 from "./pages/Temp4";
import Temp5 from "./pages/Temp5";
import Contact from "./pages/Contact";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AuthMiddleware from "./middleware/AuthMiddleware";
import AdminLogin from "./Admin/AdminLogin";
import ProtectedRoute from "./Admin/ProtectedRoute";

function App() {
  const location = useLocation();

  // Define routes where Header and Footer should not appear
  const noHeaderFooterRoutes = ["/admindashboard", "/admintemp1", "/admin"];

  // Check if current location path is one of the no-header-footer routes
  const shouldShowHeaderFooter = !noHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <>
      {/* Conditionally Render Header */}
      {shouldShowHeaderFooter && <Header />}
      <br />
      <br />
      <br />
      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/temp1" element={<Temp1 />} />
        <Route path="/temp2" element={<Temp2 />} />
        <Route path="/temp3" element={<Temp3 />} />
        <Route path="/temp4" element={<Temp4 />} />
        <Route path="/temp5" element={<Temp5 />} />
        <Route
          path="/templates"
          element={
            <AuthMiddleware>
              <Templates />
            </AuthMiddleware>
          }
        />
         <Route
          path="/admindashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>

      {/* Conditionally Render Footer */}
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
