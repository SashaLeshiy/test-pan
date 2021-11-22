import React from 'react';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';

function Main({ onSort,
    currentUsers,
    stateUser,
    setStateUser,
    currentPage,
    usersPerPage,
    paginate,
    addForm,
    deleteEmpty
}) {
    return (
        <div className="container">
            {/* <button className="btn btn-primary padding" type="submit" onClick={loadDemo}>Загрузить демо данные</button> */}
            <button className="btn btn-primary padding" type="submit" onClick={addForm}><i className="bi-plus-circle-fill"></i> Добавить поле</button>
            <button className="btn btn-primary padding" type="submit" onClick={deleteEmpty}><i className="bi-dash-circle-fill"></i> Скрыть пустые</button>
            <Table onSort={onSort}
                currentUsers={currentUsers}
                stateUser={stateUser}
                setStateUser={setStateUser}
                currentPage={currentPage}
            />
            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={stateUser.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
}

export default Main;