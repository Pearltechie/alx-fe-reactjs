import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Post from './components/Post';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
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
          <Route path="/post/:blogId" element={<blogPost />} />
          <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;