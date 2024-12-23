import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CoursesPage.css';

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      name: 'React Basics',
      description: 'Learn the fundamentals of React, including components, state, and props.',
      instructor: 'John Doe',
      startDate: '2024-01-15',
      endDate: '2024-04-15',
      requirements: 'Basic knowledge of JavaScript',
    },
    {
      id: 2,
      name: 'Advanced JavaScript',
      description: 'Dive deeper into JavaScript with advanced concepts like closures and async programming.',
      instructor: 'Jane Smith',
      startDate: '2024-02-01',
      endDate: '2024-05-01',
      requirements: 'Familiarity with ES6 features',
    },
    {
      id: 3,
      name: 'Web Development Bootcamp',
      description: 'A comprehensive guide to becoming a full-stack web developer.',
      instructor: 'Alice Johnson',
      startDate: '2024-03-01',
      endDate: '2024-08-01',
      requirements: 'No prior knowledge required',
    },
  ];

  const handleViewDetails = (course) => {
    localStorage.setItem('selectedCourse', JSON.stringify(course));
  };

  return (
    <div className="courses-container">
      <h1>Available Courses</h1>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <Link to="/course-details">
              <button onClick={() => handleViewDetails(course)}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;








