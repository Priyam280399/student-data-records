export const getStudents = (pageSize, pageNumber) => {
    const students = require('../data/students.json');
    return new Promise((resolve) => {
      setTimeout(() => {
        const startIndex = (pageNumber - 1) * pageSize;
        const paginatedData = students.slice(startIndex, startIndex + pageSize);
        resolve(paginatedData);
      }, 2000);
    });
  };
export const getStudentsForMobile = () => {
    const students = require('../data/students.json');
    return new Promise((resolve) => {
      setTimeout(() => {
        const paginatedData = students;
        resolve(paginatedData);
      }, 2000);
    });
  };
  