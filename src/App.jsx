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
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Footer from "./components/Footer";
import Templates from "./pages/Templates";
import About from "./pages/About";
import Temp1 from "./pages/Temp1";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminTemplates1 from "./Admin/AdminTemp1";

function App() {
  const location = useLocation();

  // Define routes where Header and Footer should not appear
  const noHeaderFooterRoutes = ["/admin", "/admintemp1"];

  // Check if current location path is one of the no-header-footer routes
  const shouldShowHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditionally Render Header */}
      {shouldShowHeaderFooter && <Header />}

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/about" element={<About />} />
        <Route path="/temp1" element={<Temp1 />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admintemp1" element={<AdminTemplates1 />} />
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
