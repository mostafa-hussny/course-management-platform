


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CourseDetails from './pages/CourseDetails';
import Navbar from './components/Navbar';
import CoursesPage from './pages/CoursesPage';
import PrivateRoute from './store/PrivateRoute';

function App() {
  
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* استخدام PrivateRoute لحماية المسارات */}
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/courses" element={<PrivateRoute><CoursesPage /></PrivateRoute>} />
          <Route path="/course-details" element={<PrivateRoute><CourseDetails /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
