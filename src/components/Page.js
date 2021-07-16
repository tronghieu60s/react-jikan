import React, { useEffect } from 'react';
import Boxes from "./Boxes";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";


function Page(props) {
    const { items, isLoading, pagination, getId } = props;

    let { type, page } = useParams()

    useEffect(() => {
        async function getParams() {
            await getId(parseInt(page))
        }
        getParams()
    }, [page])

    return (
        <div className="container">
            <Boxes items={items} isLoading={isLoading} />
            <Pagination pagination={pagination} getId={getId} />
        </div>
    );
}

export default Page;