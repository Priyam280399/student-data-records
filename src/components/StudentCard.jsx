import React from 'react';

const StudentCard = ({ student }) => (
  <div className="p-4 border border-gray-200 rounded-md shadow-md bg-white">
    <p><strong>Name:</strong> {student.name}</p>
    <p><strong>Age:</strong> {student.age}</p>
    <p><strong>Marks:</strong> {student.marks}</p>
    <p><strong>Roll Number:</strong> {student.rollNumber}</p>
  </div>
);

export default StudentCard;
