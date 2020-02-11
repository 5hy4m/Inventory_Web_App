import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function FilterContainer() {
    return (
        <div className="d-flex flex-column flex-fill justify-content-between">
        <table id="myTable" className="table d-flex flex-column table-hover  table-sm table-responsive w-100 m-0">
        <thead className="flex-fill  thead-dark">
            {<TableHeader />}
        </thead>           
            {<TableBody />}
        </table>
    </div>
    )
}

export default FilterContainer
