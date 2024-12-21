import React, { useEffect, useState } from 'react'
import { getStudentsForMobile } from '../hooks/useFetchStudents';
import StudentCard from './StudentCard';

const MobileView = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getData = async () => {
        setIsLoading(true)
        let data1 = await getStudentsForMobile()
        setStudents(data1)
        setIsLoading(false)
    }
    useEffect(() => {
        getData()

    }, []);
    return (
        <div className="space-y-4">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                students.map((student, index) => (
                    <StudentCard key={index} student={student} />
                ))
            )}
        </div>
    )
}

export default MobileView