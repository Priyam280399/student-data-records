import React, { useEffect, useState } from 'react'
import StudentTable from './StudentTable'
import Pagination from './Pagination'
import { getStudents } from '../hooks/useFetchStudents';

const DesktopView = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [page, setPage] = useState(1);
    const getData = async (page) => {
        setIsLoading(true)
        // getStudents(10, page).then((data) => setStudents(data));
        let data1=await getStudents(10, page)
        setStudents(data1)
        setIsLoading(false)
    }
    useEffect(() => {
        getData(page)

    }, [page]);
    return (
        <>
            {isLoading ?
                <div>Loading...</div> :
                <>
                    <StudentTable students={students} />
                    <Pagination
                        currentPage={page}
                        totalPages={5} // Adjust based on total records
                        onPageChange={(newPage) => setPage(newPage)}
                    />
                </>}
        </>
    )
}

export default DesktopView