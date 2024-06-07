import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Private from "./pages/Private.jsx"; // Import the Private page
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/private" 
          element={
            <ProtectedRoute>
              <Private />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;