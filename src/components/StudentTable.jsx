import React from "react";

const StudentTable = ({ students }) => {
  if (!students || students.length === 0) {
    return <p>No students available.</p>;
  }

  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Age</th>
          <th className="border border-gray-300 px-4 py-2">Marks</th>
          <th className="border border-gray-300 px-4 py-2">Roll Number</th>
          <th className="border border-gray-300 px-4 py-2">Class</th>
          <th className="border border-gray-300 px-4 py-2">City</th>
          <th className="border border-gray-300 px-4 py-2">Attendance</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2">{student.name}</td>
            <td className="border border-gray-300 px-4 py-2">{student.age}</td>
            <td className="border border-gray-300 px-4 py-2">{student.marks}</td>
            <td className="border border-gray-300 px-4 py-2">
              {student.rollNumber}
            </td>
            <td className="border border-gray-300 px-4 py-2">{student.class}</td>
            <td className="border border-gray-300 px-4 py-2">{student.city}</td>
            <td className="border border-gray-300 px-4 py-2">
              {student.attendance}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
