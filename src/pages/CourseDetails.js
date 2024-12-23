import React, { useEffect, useState } from 'react';
import '../styles/CourseDetails.css';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const storedCourse = JSON.parse(localStorage.getItem('selectedCourse'));
    
    if (storedCourse) {
      setCourse(storedCourse);
    } else {
      window.location.href = '/courses';
    }
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-details-container">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Start Date:</strong> {course.startDate}</p>
      <p><strong>End Date:</strong> {course.endDate}</p>
      <p><strong>Requirements:</strong> {course.requirements}</p>
    </div>
  );
};

export default CourseDetails;

