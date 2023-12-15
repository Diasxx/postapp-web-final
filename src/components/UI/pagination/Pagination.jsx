import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages,page,setPage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={()=> setPage(p)}
                    key={p}
                    className = { page === p ? 'page page__current' : 'page'}>
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;