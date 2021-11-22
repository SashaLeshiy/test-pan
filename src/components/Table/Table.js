import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import TableRow from '../TableRow/TableRow';

function Table({ onSort, currentUsers, stateUser, setStateUser, currentPage }) {

    return (
        <>
        {stateUser ?
        (<table className="table">
            < thead >
                <tr>
                    <th ><button className="table__button" name='text'>Text</button></th>
                    <th ><button className="table__button" onClick={onSort} name='fname'>First Name</button></th>
                    <th ><button className="table__button" onClick={onSort} name='lname'>Last Name</button></th>
                    <th ><button className="table__button" onClick={onSort} name='email'>E-mail</button></th>
                </tr>
            </thead >
            <tbody>
            { currentUsers.map((user, i) =>(
                <TableRow user={user} key={i}
                _id={user._id}
                stateUser={stateUser}
                setStateUser={setStateUser}
                currentUsers={currentUsers}
                currentPage={currentPage}
                />
            ))}
            </tbody>
        </table >)
        :
        <div>loading...</div>
            }
        </>
    );
}

export default Table;