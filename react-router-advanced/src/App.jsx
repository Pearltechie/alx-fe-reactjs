import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authProvider } from '../auth'; 
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import BlogPost from "./components/BlogPost";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <authProvider>
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/profile">Profile</Link>
      </nav>
      <Router> {/* Ensure BrowserRouter is here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Blog/:id" element={<BlogPost />} /> {/* Dynamic route */}
          <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
    </authProvider>
  );
}

export default App;